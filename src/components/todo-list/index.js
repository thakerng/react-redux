import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoList extends React.Component {
	constructor(){
		super();
		this.state = {
			delValue : ''
		};
	}
	render(){
		return (
			<ul>
				{
					this.props.todos.map((v,i)=>
						(<li key={i}>{v} 
							<button onClick={this.delData.bind(this)} value={i}>Done</button> 
						</li>)	
					)
				}
			</ul>
		);
	}
	delData(e){
		this.setState({delValue:e.target.value});
		console.log('this = ',this.props.todos);
		console.log('delValue = ',e.target.value);
		this.props.todos.splice(e.target.value, 1);
	}
}