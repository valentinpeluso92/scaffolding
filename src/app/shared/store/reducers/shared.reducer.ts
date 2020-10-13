import { ActionReducerMap } from '@ngrx/store';

import { ISharedState } from '../states/shared.state';
import { confirmationPopupReducer } from '../../components/confirmation-popup/store/reducers/confirmation-popup.reducer';
import { toastReducer } from '../../components/toast/store/reducers/toast.reducer';
import { spinnerReducer } from '../../components/spinner/store/reducers/spinner.reducer';

export const sharedReducer: ActionReducerMap<ISharedState> = {
    confirmationPopup: confirmationPopupReducer,
    toast: toastReducer,
    spinner: spinnerReducer,
};
