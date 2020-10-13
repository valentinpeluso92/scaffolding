import { IConfirmationPopupState } from '../../components/confirmation-popup/store/states/confirmation-popup.state';
import { IToastState } from '../../components/toast/store/states/toast.state';
import { ISpinnerState } from '../../components/spinner/store/states/spinner.state';

export interface ISharedState {
    confirmationPopup: IConfirmationPopupState;
    toast: IToastState;
    spinner: ISpinnerState;
}
