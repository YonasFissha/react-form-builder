/**
  * <HeaderBar />
  */

import React from 'react';
import Grip from '../multi-column/grip';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="toolbar-header">
        <span className="header-title">{this.props.data.text}</span>
        <div className="toolbar-header-buttons">
          <div className="btn is-isolated" onClick={this.props.onDestroy.bind(this, this.props.data)}><i className="is-isolated fas fa-trash"></i></div>
          {!this.props.data.isContainer &&
            <Grip data={this.props.data} index={this.props.index} onDestroy={this.props.onDestroy} setAsChild={this.props.setAsChild} />
          }
        </div>
      </div>
    );
  }
}
