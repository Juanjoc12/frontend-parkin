import api from './api.json';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';
export const EDIT_USER = 'EDIT_USER';
export const SELECT_USER_TO_EDIT = 'SELECT_USER_TO_EDIT';

export const onGetUsers = () =>
    dispatch => fetch(api.users)
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    })
    .catch(Promise.reject);

export const onSelectUserEdit = (userId) => 
    dispatch => dispatch({
        type: SELECT_USER_TO_EDIT,
        payload: userId
    }); 

export const createUser = ({
    nombre,
    tipo,
    placa
}) => 
    dispatch => fetch(api.users, { 
        method: 'POST', 
        body: JSON.stringify({ nombre, tipo, placa }),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => res.json())  
        .catch(Promise.reject);

export const editUser = (userId, {
    nombre,
    tipo,
    placa
}) => 
    dispatch => fetch(api.user.replace('{id}', userId), { 
        method: 'PUT', 
        body: JSON.stringify({ nombre, tipo, placa }),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(() => fetch(api.users)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: data
                })
            })
            .catch(Promise.reject))   
        .catch(Promise.reject);

export const deleteUser = (userId) => 
    dispatch => fetch(api.user.replace('{id}', userId), { 
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(() => fetch(api.users)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: data
                })
            })
            .catch(Promise.reject))  
        .catch(Promise.reject);