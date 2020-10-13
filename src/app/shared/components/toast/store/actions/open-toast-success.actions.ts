import { Action } from '@ngrx/store';

import { IToastState } from '../states/toast.state';
import { ToastActionsTypes } from './toast.actions';

export class OpenToastSuccessAction implements Action {
    public readonly type: string;
    public payload: IToastState = null;

    constructor() {
        this.type = ToastActionsTypes.OPEN_TOAST_SUCCESS;
    }
}
