import { IUser } from "../../../interfaces/user";

export interface Props {
    errorMessage: string,
    createUser: (data: IUser) => void,
    clearError: () => void
}
