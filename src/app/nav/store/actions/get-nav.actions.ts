import { Action } from '@ngrx/store';
import { NavActionsTypes } from './nav.actions';

export class GetNavAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = NavActionsTypes.GET_NAV;
    }
}
