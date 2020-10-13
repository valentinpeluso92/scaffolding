import { OpenPopupAction } from './open-popup.actions';
import { ClosePopupAction } from './close-popup.actions';
import { IsAgreeAction } from './is-agree.actions';
import { OpenPopupSuccessAction } from './open-popup-success.actions';

export enum ConfirmationPopupActionsTypes {
    OPEN_POPUP = 'OPEN_POPUP',
    OPEN_POPUP_SUCCESS = 'OPEN_POPUP_SUCCESS',
    CLOSE_POPUP = 'CLOSE_POPUP',
    IS_AGREE = 'IS_AGREE',
}
export type ConfirmationPopupActions = OpenPopupAction | OpenPopupSuccessAction | ClosePopupAction | IsAgreeAction;
