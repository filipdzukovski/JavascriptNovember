import React from 'react';

export class StateClassExample extends React.Component {

    constructor(props) {
        super(props);
        console.log("This is called from the CONSTRUCTOR!!!!")
        this.state = {
            promenliva: 'Vrednost 1'
        }
    }

    componentDidMount() {
        console.log("This is COMPONENT DID MOUNT")
    }

    smeniVrednost = () => {
        this.setState({
            promenliva: 'Vrednost 2'+'3'
        }, () => {
            console.log(this.state.promenliva)
        })
        // console.log(this.state.promenliva +'3');


    }

    render() {
        console.log("This is RENDER METHOD")
        return (
            <div id='state-class-component'>
                <h2>Klasna Komponenta</h2>
                <p>Vrednosta na promenlivata e: {this.state.promenliva}</p>
                <button onClick={this.smeniVrednost}>Click Me !</button>
            </div>
        )
    }
}