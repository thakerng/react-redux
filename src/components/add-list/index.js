import React from 'react';
import {Button, Modal, FormControl} from 'react-bootstrap';

export default class AddList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      show: false
    };
  }

  render() {
    let close = () => this.setState({show: false});
    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({show: true})}
          style={{float: "right"}}
        >
          Add
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Add List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              className="formcontrol"
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              autoFocus="true"
              onChange={this.update.bind(this)}
              onKeyPress={this.enter.bind(this)}
            />
            <Button className="test" bsStyle="primary" onClick={this.pushTodo.bind(this)}>Add</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  enter = (e) => {
    if (e.which == 13) {
      this.pushTodo()
    }
  }

  update = (e) => {
    this.setState({value: e.target.value});
  }

  pushTodo = () => {
    this.setState({value: ""});
    this.props.addToDoItem(this.state.value);
  }
}