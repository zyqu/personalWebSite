import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';

class App extends Component {
  render() {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || 'root';
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <ReactCSSTransitionGroup
              transitionName="cross-fade"
              transitionAppear={true}
              transitionAppearTimeout={300}
              transitionLeaveTimeout={300}
              transitionEnterTimeout={600}>
              {React.cloneElement(this.props.children, {key: segment})}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
