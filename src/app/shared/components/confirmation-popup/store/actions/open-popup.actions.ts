import { Action } from '@ngrx/store';
import { ConfirmationPopupActionsTypes } from './confirmation-popup.actions';

export interface IOpenPopupPayloadAction {
    msg: string;
    actionRealized: string;
    params?: any;
}

export class OpenPopupAction implements Action {
    public readonly type: string;

    constructor(public payload: IOpenPopupPayloadAction) {
        this.type = ConfirmationPopupActionsTypes.OPEN_POPUP;
    }
}
