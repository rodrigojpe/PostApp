

import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[POST] Create Post',
    props<{textDescription: string, textName: string}>(),
    );

export const toggle = createAction(
    '[POST] Toggle Post',
    props<{id: number}>()
    );

export const delet = createAction(
    '[POST] Delete Post',
    props<{id: number}>()
    );

export const serach = createAction(
    '[POST] Filter Post',
    props<{ textName: string}>()
    );