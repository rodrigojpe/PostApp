

import { createReducer, on } from '@ngrx/store';
import { filter } from './filtro.actions';

const initialState = '';

export const filtroReducer = createReducer(  initialState,
  on(filter, (state, { filtro }) => filtro),
 



   

)
