export interface SharedState{
    errorMessage: string;
    showLoading: boolean
}

export const initialSharedSatae: SharedState ={
    errorMessage: '',
    showLoading: false
}