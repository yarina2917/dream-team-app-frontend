import { call, put } from 'redux-saga/effects';

import services from '../../services';
import cookies from '../../services/cookies';

import authActions from './constants';

function * login (action: any) {
    try {
        const response = yield call(services.auth.login, action.payload);
        setLoginData(response.data);
        yield put({ type: authActions.LOGIN_USER_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response ? error.response.data.message : error });
    }
}

function * createUser (action: any) {
    try {
        const response = yield call(services.auth.createUser, action.payload);
        setLoginData(response.data);
        yield put({ type: authActions.LOGIN_USER_SUCCESS, payload: response.data});
    } catch (error) {
        yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response ?  error.response.data.message : error});
    }
}

function * getUser () {
    if (cookies.get('token')) {
        try {
            const response = yield call(services.auth.getUser);
            setLoginData(response.data);
            yield put({ type: authActions.LOGIN_USER_SUCCESS, payload: response.data});
        } catch (error) {
            yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response ? error.response.data.message : error });
        }
    } else {
        yield put({ type: authActions.AUTH_USER_ERROR, payload: '' });
    }
}

function * updateUser (action: any) {
    try {
        const response = yield call(services.auth.updateUser, action.payload);
        yield put({ type: authActions.UPDATE_USER_SUCCESS, payload: response.data });
        action.payload.callback();
    } catch (error) {
        yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response ? error.response.data.message : error })
    }
}

function * logout () {
    try {
        yield call(services.auth.logout);
        services.cookies.remove('token');
        yield put({ type: authActions.LOGOUT_USER_SUCCESS, payload: [] });
    } catch (error) {
        yield put({ type: authActions.AUTH_USER_ERROR, payload: error.response ? error.response.data.message : error });
    }
}

const setLoginData = (data: any) => {
    services.cookies.set('token', data.apiKey);
};

export default {
    login,
    createUser,
    updateUser,
    getUser,
    logout
}
