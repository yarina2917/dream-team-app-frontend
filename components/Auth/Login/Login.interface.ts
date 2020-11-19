import { IUserLogin } from "../../../interfaces/user";

export interface Props {
    errorMessage: string,
    loginUser: (data: IUserLogin) => void,
    clearError: () => void
}
