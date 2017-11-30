import {Action} from '@ngrx/store';

export function reduce(state: string = 'Hola', action: Action){
    switch(action.type){
        case 'ESP':
            return state = "Hola mundo"; 
        case 'ENG':
            return state = "Hello world"; 
        default: 
            return state = "Saludo";
    }
}