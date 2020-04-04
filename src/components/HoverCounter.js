import React, { Component } from 'react'

class HoverCounter extends Component {
    
    render() {
        const { count, handler } = this.props
        return (
            <React.Fragment>
                <h2 onMouseOver={handler}> Hover { count } times. </h2>
            </React.Fragment>
        )
    }
}

export default HoverCounter;
