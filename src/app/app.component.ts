import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: Observable<string>;

  constructor(private store:Store<AppState>){
    this.message = this.store.select('message');
  }

  saludar(){
    this.store.dispatch({type: "ESP"});
  }

  salute(){
    this.store.dispatch({type: "ENG"});
  }
}
