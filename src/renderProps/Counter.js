import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        };
    }

    incrementCounter = () => {
        this.setState(previousState => {
            return { count: previousState.count + 1 };
        });
    }
    
    render() {
        return (
            <React.Fragment>
                {
                    this.props.render(this.state.count, this.incrementCounter)
                }
            </React.Fragment>
        )
    }
}

export default Counter
