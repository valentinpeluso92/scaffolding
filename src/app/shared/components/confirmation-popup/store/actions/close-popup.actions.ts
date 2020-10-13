import { Action } from '@ngrx/store';
import { ConfirmationPopupActionsTypes } from './confirmation-popup.actions';

export class ClosePopupAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = ConfirmationPopupActionsTypes.CLOSE_POPUP;
    }
}
