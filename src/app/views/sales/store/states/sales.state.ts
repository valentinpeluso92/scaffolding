import { Tab } from '../../models/tab';

export const salesViewInitialState: ISalesViewState = {
    isLoading: true,
    tabSelected: 2,
    tabs: [new Tab('', []), new Tab('', []), new Tab('', [])],
    error: null,
};

export interface ISalesViewState {
    isLoading: boolean;
    tabSelected: number;
    tabs: Tab[];
    error: any;
}

export interface ISalesState {
    salesView: ISalesViewState;
}
