import { Action } from '@ngrx/store';

import { INavState } from '../states/nav.state';
import { NavActions } from './nav.actions';

export class ToggleNavAction extends NavActions implements Action {
    public static TOGGLE_NAV = 'TOGGLE_NAV';

    constructor(payload: INavState) {
        super();

        this.type = ToggleNavAction.TOGGLE_NAV;
        this.payload = payload;
    }
}
