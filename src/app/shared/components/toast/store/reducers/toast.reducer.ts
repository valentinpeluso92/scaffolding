import { toastInitialState, IToastState } from '../states/toast.state';
import { ToastActions, ToastActionsTypes } from '../actions/toast.actions';

export function toastReducer(state = toastInitialState, action: ToastActions): IToastState {
    switch (action.type) {
        case ToastActionsTypes.OPEN_TOAST: {
            return {
                ...state,
                msg: action.payload.msg,
                type: action.payload.type,
            };
        }
        default: {
            return state;
        }
    }
}
