import React from 'react';
// import CSSModules from 'react-css-modules';
import TodoList from '../../components/todo-list';
import style from './style.css';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			todos : [],
			value : '',
			delValue : ''
		};
	}
	render(){
		const {fillbox,content} = style;
		return (
			<div className={fillbox}>
				<input type="textbox" onChange={this.update.bind(this)} />
				<button type="button" onClick={this.pushTodo.bind(this)}>Add</button>
				<TodoList todos={this.state.todos} />
			</div>
		);
	}

	update(e){
		this.setState({value:e.target.value});
	}

	pushTodo(){
		this.setState({todos:[...this.state.todos, this.state.value]});
	}
}

export default App
