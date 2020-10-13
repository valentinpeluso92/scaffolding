import { Action } from '@ngrx/store';
import { ConfirmationPopupActionsTypes } from './confirmation-popup.actions';

export class OpenPopupSuccessAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = ConfirmationPopupActionsTypes.OPEN_POPUP_SUCCESS;
    }
}
