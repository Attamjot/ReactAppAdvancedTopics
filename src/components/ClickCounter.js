import React, { Component } from 'react'

class ClickCounter extends Component {
    
    render() {
        const { count, handler } = this.props
        return (
            <React.Fragment>
                <button onClick={handler}> Clicked { count } times. </button>
            </React.Fragment>
        )
    }
}

export default ClickCounter
