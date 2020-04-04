import React, { Component } from 'react'
import withCounter from '../hoc/withCounter';


class HoverCounter extends Component {
    render() {
        const { count, incrementCounter } = this.props
        return (
            <h2 onMouseOver={incrementCounter}> Mouse over {count} times </h2>
        )
    }
}

export default withCounter(HoverCounter);
