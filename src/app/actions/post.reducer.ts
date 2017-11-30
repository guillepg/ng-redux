import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';
import { Action } from '@ngrx/store';

export type All = PostActions.All;

const defaultState: Post = {
    text: 'Post inicial',
    likes: 0
}

const newState = function(state, newData) {
    return Object.assign({}, state, newData);
}

export function postReducer(state: Post = defaultState, action: Action){
    switch (action.type){
        case PostActions.EDIT_TEXT:
            break; //return newState(state, {text: action.payload});
        case PostActions.RESET:
            return newState(state, {text: '', likes: 0});
        case PostActions.UPVOTE:
            return newState(state, {likes: state.likes + 1});
        case PostActions.DOWNVOTE:
            return newState(state, {likes: state.likes - 1});
        default: break;
    }
}