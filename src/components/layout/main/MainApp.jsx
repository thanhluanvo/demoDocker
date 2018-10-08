import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MainApp.css';
import Body from './body/Body';

class MainApp extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
  render() {
    return (
      <div className="MainApp">
        <Body/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
