import React from 'react';
import {Checkbox, Button} from 'react-bootstrap';
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../actions/todoActions';

@connect(
  (state)=>({...state.todo}),
  (dispatch)=>({actions: bindActionCreators(TodoActions, dispatch)})
)
export default class TodoList extends React.Component {
  render() {
    let filteredData = this.filterData(this.props.todos, this.props.filter);
    return (
      <div>
        <ul>
          { filteredData.map((v, i)=>
            (<li key={i}>
              <input type="checkbox" onClick={this.toggleData.bind(this, v.id)} checked={v.isDone} value={v.id}/>
              {/*<Checkbox onClick={this.toggleData.bind(this)} checked="false" value={i}/>*/}
              {v.title}
              <Button bsStyle='danger'
                      bsSize="xsmall"
                      onClick={this.delData.bind(this, v.id)}>
                Delete
              </Button>
            </li>)
          )
          }
        </ul>
      </div>

    );
  }

  delData = (i) => {
    // this.setState({delValue:e.target.value});
    // console.log('this = ',this.props.todos);
    // console.log('delValue = ', e.target.value);
    // this.props.todos.splice(e.target.value, 1);
    this.props.actions.archive(i);
  }

  toggleData = (i) => {
    this.props.actions.toggleToDo(i);
  }

  filterData = (todos, filter) => {
    switch (filter) {
      case 'showAll':
        this.props.actions.filter(filter);
        return todos;
      case 'active':
        this.props.actions.filter(filter);
        return todos.filter(t => !t.isDone);
      case 'done':
        this.props.actions.filter(filter);
        return todos.filter(t => t.isDone);
    }
  }
}

