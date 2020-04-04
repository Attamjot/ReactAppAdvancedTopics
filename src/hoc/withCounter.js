import React from 'react';

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
     constructor(props) {
         super(props)
     
         this.state = {
            count: 0
         }
     }

     incrementCounter = () => {
         this.setState(previousState => {
             return {count: previousState.count + 1};
         });
     }

     render() {
         const { count } = this.state;
         return (
            <WrappedComponent 
             count= {count}
             incrementCounter={this.incrementCounter}
             {...this.props}
            />
         );
     }
     
  }
  return WithCounter;
};

export default withCounter;