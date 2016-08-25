import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';
import {connect} from  'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../../actions/todoActions';

@connect(
  (state) => ({...state.todo}),
  (dispatch) => ({actions: bindActionCreators(TodoActions, dispatch)})
)

export default class Footer extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button onClick={this.Filter.bind(this)} id="showAll">Show all</Button>
        <Button onClick={this.Filter.bind(this)} id="active">Active</Button>
        <Button onClick={this.Filter.bind(this)} id="done">Done</Button>
      </ButtonGroup>
    )
  }

  Filter(e) {
    this.props.actions.filter(e.target.id);
  }
}
