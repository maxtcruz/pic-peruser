import React, { Component } from 'react';
import './RefreshButton.css';

export default class RefreshButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickHandler: props.clickHandler
        }
    }

    render() {
        return(
            <div className='refreshButton'>
                <button onClick={this.state.clickHandler}>
                    refresh
                </button>
            </div>
        );
        
    }
}