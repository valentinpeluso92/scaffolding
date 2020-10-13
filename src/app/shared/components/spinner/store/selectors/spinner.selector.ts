import { createSelector } from '@ngrx/store';

import { ISharedState } from '../../../../store/states/shared.state';
import { sharedSelector } from '../../../../store/selectors/shared.selector';
import { ISpinnerState } from '../states/spinner.state';

export const spinnerSelector = createSelector(
    sharedSelector,
    (state: ISharedState) => state.spinner
);

export const isShownSelector = createSelector(
    spinnerSelector,
    (state: ISpinnerState) => state.isShown
);
