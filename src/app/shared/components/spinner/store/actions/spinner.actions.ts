import { ShowSpinnerAction } from './show-spinner.actions';
import { HideSpinnerAction } from './hide-spinner.actions';

export enum SpinnerActionsTypes {
    SHOW_SPINNER = 'SHOW_SPINNER',
    HIDE_SPINNER = 'HIDE_SPINNER',
}
export type SpinnerActions = ShowSpinnerAction | HideSpinnerAction;
