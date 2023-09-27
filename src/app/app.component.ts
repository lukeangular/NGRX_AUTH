import { Component, OnInit } from '@angular/core';
import { AppSate } from './appstate/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getErrorMessage } from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx_auth';

  errorMessage: Observable<string>

  constructor(
    private _store: Store<AppSate>
  ){}

  ngOnInit(): void {
    this.errorMessage = this._store.select(getErrorMessage);
  }
}
