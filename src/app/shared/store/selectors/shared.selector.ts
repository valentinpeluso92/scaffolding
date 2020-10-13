import { ISharedState } from '../states/shared.state';

import { get } from 'lodash';

export const sharedSelector = (state: ISharedState) => get(state, 'shared');
