import { confirmationPopupInitialState, IConfirmationPopupState } from '../states/confirmation-popup.state';
import { ConfirmationPopupActions, ConfirmationPopupActionsTypes } from '../actions/confirmation-popup.actions';

export function confirmationPopupReducer(state = confirmationPopupInitialState, action: ConfirmationPopupActions): IConfirmationPopupState {
    switch (action.type) {
        case ConfirmationPopupActionsTypes.OPEN_POPUP: {
            return {
                ...state,
                msg: action.payload.msg,
                actionRealized: action.payload.actionRealized,
                params: action.payload.params,
            };
        }
        case ConfirmationPopupActionsTypes.IS_AGREE: {
            return {
                ...state,
                isAgree: true,
            };
        }
        case ConfirmationPopupActionsTypes.CLOSE_POPUP: {
            return {
                ...state,
                msg: confirmationPopupInitialState.msg,
                actionRealized: confirmationPopupInitialState.actionRealized,
                params: confirmationPopupInitialState.params,
                isAgree: confirmationPopupInitialState.isAgree,
            };
        }
        default: {
            return state;
        }
    }
}
