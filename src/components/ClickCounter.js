import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class ClickCounter extends Component {
    render() {
        const { count, incrementCounter } = this.props;
        return (
            <button onClick={incrementCounter}>Clicked { count } times</button>
        );
    }
}

export default withCounter(ClickCounter);
