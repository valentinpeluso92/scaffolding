import { INavState, initialState } from '../states/nav.state';
import { NavActions } from '../actions/nav.actions';
import { ToggleNavAction } from '../actions/toggle-nav.actions';

export function reducer(state = initialState, action: NavActions): INavState {
    switch (action.type) {
        case ToggleNavAction.TOGGLE_NAV:
            return {
                ...state,
                isOpen: action.payload.isOpen,
            };
        default: {
            return state;
        }
    }
}
