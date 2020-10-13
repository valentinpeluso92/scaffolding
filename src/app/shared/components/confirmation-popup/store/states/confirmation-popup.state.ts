export const confirmationPopupInitialState: IConfirmationPopupState = {
    msg: '',
    isAgree: false,
    actionRealized: '',
    params: null,
};

export interface IConfirmationPopupState {
    isAgree: boolean;
    msg: string;
    actionRealized: string;
    params: any;
}
