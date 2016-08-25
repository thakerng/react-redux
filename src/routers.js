import React from 'react';
import { Router, Route, Link ,browserHistory} from 'react-router';
import App from './containers/app';

class About extends React.Component{
  render(){
    console.log(this.props);
    return (<div>This is about</div>);
  }
}

class NoMatch extends React.Component{
  render(){
    return (<div>No Match</div>);
  }
}

class RootPage extends React.Component{
  render(){
    return (
      <div>
        <h1>This is Root Page</h1>
        <Link to="todo">Todo</Link>
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
        {this.props.children}
      </div>
    );
  }
}

export default class Routers extends React.Component{
  render(){
    return(
        <Router history={browserHistory}>
          <Route path="/" component={RootPage}>
            <Route path="todo" component={App}/>
            <Route path="users" component={About} name="users">
              <Route path="/user/:userId" component={About}/>
            </Route>
            <Route path="*" component={NoMatch}/>
          </Route>
        </Router>
    );
  }
}