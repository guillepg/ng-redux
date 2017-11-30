import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Post } from './models/post.model';
import { UPVOTE, DOWNVOTE, EDIT_TEXT, RESET } from './actions/post.actions';
import * as PostActions from './actions/post.actions';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: Observable<string>;
  post: Observable<Post>;
  nuevoTexto: string;

  constructor(private store:Store<AppState>){
    this.message = this.store.select('message');
    this.post = this.store.select('post');
  }

  saludar(){
    this.store.dispatch({type: "ESP"});
  }

  salute(){
    this.store.dispatch({type: "ENG"});
  }
  
  like(){
    this.store.dispatch(new PostActions.UpVote());
  }

  dislike(){
    this.store.dispatch(new PostActions.DownVote());
  }
  
  editText(){
    this.store.dispatch(new PostActions.EditText(this.nuevoTexto));
  }
  
  reset(){
    this.store.dispatch(new PostActions.Reset());
  }
}
