import React from "react";

class TestPage extends React.Component {

    constructor() {
        super();
        this.state ={time: new Date()}
    }

    componentDidMount() {
        this.timeId = setInterval( ()=> {
            this.tick()
        })
    }

    tick() {
        this.setState( {
            time: new Date()
        })
    }

    render() {
        return (
            <>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default TestPage;