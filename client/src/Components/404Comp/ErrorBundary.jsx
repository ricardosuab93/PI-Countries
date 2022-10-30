import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }

      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }

      render() {
        if (this.state.errorInfo) {
          // Error path
          return (
            <div>
              <Link to='/http://localhost:3000/home'><h1>Henry Countries</h1></Link>
              <h2>Something went wrong.</h2>
              <h2>Please refresh the page.</h2>
              
            </div>
          );
        }
        // Normally, just render children
        return this.props.children;
      } 
}
