import React from 'react';
import TodoList from '../../components/todo-list';
import AddList from '../../components/add-list';
import Footer from '../../components/footer';
import {connect} from 'react-redux';
import * as TodoActions from '../../actions/todoActions';
import {bindActionCreators} from 'redux';
import style from './style.css'
@connect(
    (state)=>({ ...state.todo }),
    (dispatch)=>({ actions: bindActionCreators(TodoActions, dispatch)})
)
export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            value : '',
            delValue : ''
        };
    }
    componentDidMount(){
        this.props.actions.fetchToDo();
        console.log('component did mount');
    }

    render(){
        return (
            <div className="fillbox">
                <br/>
                <h1>Todo List 2</h1>
                {(this.props.isFetching)?<p>Loading</p>:false}
                <AddList addToDoItem={this.addToDoItem.bind(this)}/>
                <TodoList todos={this.props.todos} />
                <Footer />
            </div>
        );
    }

    addToDoItem(title){
        this.props.actions.addToDo(title);
    }
}

/*
function mapStateToProps(state){
    return {
        ...state.todo
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}*/
