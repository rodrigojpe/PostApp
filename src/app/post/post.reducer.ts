

import { createReducer, on } from '@ngrx/store';
import { crear, toggle, delet, serach, list } from './post.actions';
import { Post } from './models/post.models';

const initialState: Post[] = [
    new Post('Ya comienza lo bueno !','sdasdasd'),
    new Post('Vamos a ser grandes !','ddddd'),
    new Post('Sere el mejor !!!','asdasd')

];

export const postReducer = createReducer(  initialState,
  on(crear, (state, {textDescription, textName}) => [...state, new Post(textName, textDescription  )  ] ),
  on(toggle, (state, {id}) => {
    return state.map( post => {
      if (post.id === id){
        return {
          ...post,
          completed: !post.completed
        }
      }else {
        return post;
      }
    })
  }),

  on(delet, (state, {id}) => state.filter(post => post.id !== id )),


  on(serach, (state, {textName }) => state.filter(post => post.textName === textName)), 
   
  on(list, (state, {textName}) => {
    return state.map( post => {
      if (post.textName === textName){
        return post
        
      }else {
        return post;
      }
    })
  })
)
