import { spinnerInitialState, ISpinnerState } from '../states/spinner.state';
import { SpinnerActions, SpinnerActionsTypes } from '../actions/spinner.actions';

export function spinnerReducer(state = spinnerInitialState, action: SpinnerActions): ISpinnerState {
    switch (action.type) {
        case SpinnerActionsTypes.SHOW_SPINNER: {
            return {
                ...state,
                isShown: true,
            };
        }
        case SpinnerActionsTypes.HIDE_SPINNER: {
            return {
                ...state,
                isShown: false,
            };
        }
        default: {
            return state;
        }
    }
}
