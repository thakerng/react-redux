import expect from 'expect';
import todo from '../../src/reducers/todo';
import * as ActionTypes from '../../src/constants/ActionTypes';
describe('todo reducer',()=>{
    xit('should be able to add a todo list',()=>{
        expect(todo(
            {
                todos:[],
                counter:0,
            },{
                type:ActionTypes.ADD_TODO,
                todo:{
                    title:'Garbage a trash',
                    isDone:true
                }
            }
        )).toEqual({
            counter:1,
            todos:[
                {id:1,title:'Garbage a trash',isDone:true}
            ]}
        );
    });

    xit('should be able to add next todo',()=>{
        expect(todo(
            {
                todos:[{
                    id:1,
                    title:'Garbage a trash',
                    isDone:true
                }],
                counter:1
            },{
                type:ActionTypes.ADD_TODO,
                todo:{
                    title:'Running',
                    isDone:false
                }
            }
        )).toEqual({
            counter:2,
            todos:[
                {id:1,title:'Garbage a trash',isDone:true},
                {id:2,title:'Running',isDone:false}
            ]}
        );
    });

    xit('should be toggle todo list',()=>{
        expect(todo(
            {
                counter:2,
                todos:[
                    {id:1,title:'Garbage a trash',isDone:true},
                    {id:2,title:'Running',isDone:false}]
            },
            {
                type:ActionTypes.TOGGLE_TODO,
                id:1
            }
        )).toEqual(
            {
                counter:2,
                todos:[
                    {id:1,title:'Garbage a trash',isDone:false},
                    {id:2,title:'Running',isDone:false}]
            }
        );
    });

    xit('should be remove todo list',()=>{
        expect(todo(
            {
                counter:2,
                todos:[
                    {id:1,title:'Garbage a trash',isDone:true},
                    {id:2,title:'Running',isDone:false}]
            },
            {
                type:ActionTypes.ARCHIVE_TODO,
                id:1
            }
        )).toEqual(
            {
                counter:2,
                todos:[
                    {id:2,title:'Running',isDone:false}
                ]
            }
        );
    });

    xit('should be change filter',()=>{
        expect(todo(
            {
                filter: 1,
                counter:1,
                todos:[
                    {id:1,title:'Garbage a trash',isDone:true},
                    {id:2,title:'Running',isDone:false}]
            },
            {
                type:ActionTypes.FILTER_TODO,
                id:2
            }
        )).toEqual(
            {
                filter: 2,
                counter:1,
                todos:[
                    {id:2,title:'Running',isDone:false}
                ]
            }
        );
    });

});
