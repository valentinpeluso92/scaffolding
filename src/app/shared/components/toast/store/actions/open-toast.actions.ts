import { Action } from '@ngrx/store';

import { IToastState } from '../states/toast.state';
import { ToastActionsTypes } from './toast.actions';

export class OpenToastAction implements Action {
    public readonly type: string;

    constructor(public payload: IToastState) {
        this.type = ToastActionsTypes.OPEN_TOAST;
    }
}
