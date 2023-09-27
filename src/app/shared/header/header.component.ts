import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSate } from 'src/app/appstate/app.state';
import { isUserAuthenticated } from 'src/app/auth/state/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Observable<boolean>
  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(): void {
    this.isAuthenticated = this._store.select(isUserAuthenticated)
  }
}
