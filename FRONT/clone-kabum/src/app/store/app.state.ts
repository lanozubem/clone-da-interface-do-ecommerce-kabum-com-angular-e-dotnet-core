import { createReducer } from "@ngrx/store"

export interface IAppState {
    logado: boolean,
}

export const appInitialState: IAppState = {
    logado: false
}

export const appReducer = createReducer(appInitialState);