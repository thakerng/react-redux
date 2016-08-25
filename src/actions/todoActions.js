import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import urlencoder from 'form-urlencoded';

export const addToDo = (title) => (dispatch)=>{
    fetch('http://localhost:3001/api/todo/add',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoder({title})
    }).then((response)=> {
        return response.json();
    }).then(({success})=>{
        success && dispatch({
            type:types.ADD_TODO,todo:{title,isDone:false}
        });
    }).catch((e)=>{
        console.log(e);
    })
};

export const toggleToDo = (id) => (dispatch) =>{
    fetch('http://localhost:3001/api/todo/toggle',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoder({id})
    }).then((response)=> {
        return response.json();
    }).then(({success})=>{
        success && dispatch({
            type:types.TOGGLE_TODO,id
        });
    }).catch((e)=>{
        console.log(e);
    })
};

export const archive = (id) => (dispatch) => {
    fetch('http://localhost:3001/api/todo/archive',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlencoder({id})
    }).then((response)=> {
        return response.json();
    }).then(({success})=>{
        success && dispatch({
            type:types.ARCHIVE_TODO,id
        });
    }).catch((e)=>{
        console.log(e);
    })
};

export const fetchToDo = ()=> (dispatch)=>{
    fetch('http://localhost:3001/api/todo/all')
        .then((response)=>{
            if(response.status>=400){
                dispatch({
                    type:types.FETCH_TODO_STATE_FAILED
                });
            }
            return response.json();
        })
        .then(({state})=>{
            dispatch({
                type:types.FETCH_TODO_STATE_SUCCESS,
                state
            });
        });
    dispatch({
        type:types.FETCH_TODO_STATE_REQUESTED
    });
};

export const filter = (filter) => ({
    type:types.FILTER_TODO, filter
});