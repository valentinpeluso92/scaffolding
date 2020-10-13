import { Action } from '@ngrx/store';
import { NavActionsTypes } from './nav.actions';

export class ToggleNavAction implements Action {
    public readonly type: string;

    constructor(public payload: boolean) {
        this.type = NavActionsTypes.TOGGLE_NAV;
    }
}
