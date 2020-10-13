import { createSelector } from '@ngrx/store';
import { sharedSelector } from '../../../../store/selectors/shared.selector';
import { ISharedState } from '../../../../store/states/shared.state';
import { IConfirmationPopupState } from '../states/confirmation-popup.state';

export const confirmationPopupSelector = createSelector(
    sharedSelector,
    (state: ISharedState) => state.confirmationPopup
);

export const msgSelector = createSelector(
    confirmationPopupSelector,
    (state: IConfirmationPopupState) => state.msg
);

export const isAgreeSelector = createSelector(
    confirmationPopupSelector,
    (state: IConfirmationPopupState) => state.isAgree
);
