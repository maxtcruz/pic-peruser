import React, { Component } from 'react';

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: props.url
        }
    }

    render() {
        return <img src={this.state.url} />
    }
}