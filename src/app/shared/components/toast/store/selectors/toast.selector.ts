import { createSelector } from '@ngrx/store';

import { IToastState } from '../states/toast.state';
import { ISharedState } from '../../../../store/states/shared.state';
import { sharedSelector } from '../../../../store/selectors/shared.selector';

export const toastSelector = createSelector(
    sharedSelector,
    (state: ISharedState) => state.toast
);

export const msgSelector = createSelector(
    toastSelector,
    (state: IToastState) => state.msg
);

export const typeSelector = createSelector(
    toastSelector,
    (state: IToastState) => state.type
);
