import { ActionReducerMap } from '@ngrx/store';
import { Post } from './post/models/post.models';
import { postReducer } from './post/post.reducer';
import { filtroReducer } from './filtro/filtro.reducer';



export interface AppState {
    posts: Post[],
    filtro: string
}


export const appReducers: ActionReducerMap<AppState> =  {
    posts: postReducer,
    filtro: filtroReducer
}