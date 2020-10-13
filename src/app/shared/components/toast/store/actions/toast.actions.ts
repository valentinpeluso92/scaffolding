import { OpenToastAction } from './open-toast.actions';
import { OpenToastSuccessAction } from './open-toast-success.actions';

export enum ToastActionsTypes {
    OPEN_TOAST = 'OPEN_TOAST',
    OPEN_TOAST_SUCCESS = 'OPEN_TOAST_SUCCESS',
}
export type ToastActions = OpenToastAction | OpenToastSuccessAction;
