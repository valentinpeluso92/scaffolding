import { NavItem } from '../../../../../models/api/nav/nav-item';

export const navInitialState: INavState = {
    isOpen: false,
    selected: null,
    items: [],
    isLoading: true,
    error: null,
};

export interface INavState {
    isOpen: boolean;
    selected: NavItem;
    items: NavItem[];
    error: any;
    isLoading: boolean;
}

export interface IState {
    nav: INavState;
}
