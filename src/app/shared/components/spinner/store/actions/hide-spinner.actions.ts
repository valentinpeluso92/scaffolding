import { Action } from '@ngrx/store';

import { ISpinnerState } from '../states/spinner.state';
import { SpinnerActionsTypes } from './spinner.actions';

export class HideSpinnerAction implements Action {
    public readonly type: string;
    public payload: ISpinnerState = null;

    constructor() {
        this.type = SpinnerActionsTypes.HIDE_SPINNER;
    }
}
