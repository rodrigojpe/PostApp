import { createAction, props } from '@ngrx/store';



export const filter = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: string}>()
)