import { INavState } from './nav/states/nav.state';

export interface ISharedState {
    nav: INavState;
}

export interface IState {
    shared: ISharedState;
}
