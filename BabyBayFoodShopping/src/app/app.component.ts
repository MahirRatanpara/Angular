import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Store} from "@ngrx/store";
import * as fromApp from './store/app.reducer'
import * as AuthActions from "./auth/store/auth.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    //StoreCodeStarts
    this.store.dispatch(new AuthActions.AutoLogin());
    //StoreCodeEnds

    //ChangesStoreStarts
    // this.authService.autoLogin();
    //  ChangesStoreEnds
  }
}
