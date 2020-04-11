import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pageTitle: "About Page"
        };
    }

    render() {
        const { pageTitle } = this.state
        return (
          <div>
                <h2>{pageTitle}</h2>
          </div>
        );
    }
}

export default About;