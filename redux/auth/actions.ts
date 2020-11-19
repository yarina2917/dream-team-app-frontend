import actionsType from './constants'
import {IUser, IUserLogin} from "../../interfaces/user";

const loginUser = (data: IUserLogin) => ({ type: actionsType.LOGIN_USER, payload: data });
const createUser = (data: IUser) => ({ type: actionsType.CREATE_USER, payload: data });
const updateUser = (data: Partial<IUser>) => ({ type: actionsType.UPDATE_USER, payload: data });
const getUser = () => ({ type: actionsType.GET_USER });
const clearUserError = () => ({ type: actionsType.CLEAR_USER_ERROR });
const logoutUser = () => ({type: actionsType.LOGOUT_USER});

export default {
    loginUser,
    createUser,
    updateUser,
    getUser,
    clearUserError,
    logoutUser
}
