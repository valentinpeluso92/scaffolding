import { Action } from '@ngrx/store';

import { ISpinnerState } from '../states/spinner.state';
import { SpinnerActionsTypes } from './spinner.actions';

export class ShowSpinnerAction implements Action {
    public readonly type: string;
    public payload: ISpinnerState = null;

    constructor() {
        this.type = SpinnerActionsTypes.SHOW_SPINNER;
    }
}
