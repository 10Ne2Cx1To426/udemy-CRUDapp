import React, { Component } from "react";
import { connect } from "react-redux";

import { readEvents } from "../actions/index";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props;

    return (
      <>
        <div>
          <h2>hello!</h2>
        </div>
      </>
    );
  }
}

const mapStoreToProps = (state) => ({});
const mapDispachToProps = { readEvents };

export default connect(mapStoreToProps, mapDispachToProps)(EventsIndex);
