export enum IToastTypes {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    SUCCESS = 'SUCCESS',
    DANGER = 'DANGER',
    WARNING = 'WARNING',
    INFO = 'INFO',
    LIGHT = 'LIGHT',
    DARK = 'DARK',
}

export const toastInitialState: IToastState = {
    msg: '',
    type: IToastTypes.PRIMARY,
};

export interface IToastState {
    msg: string;
    type: IToastTypes;
}
