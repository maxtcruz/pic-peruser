import React, { Component } from 'react';
import './Photo.css';

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoUrl: props.photoUrl,
            username: props.username,
        }
    }

    render() {
        let baseUrl = 'https://unsplash.com/'

        return(
            <div className='photo'>
                <img 
                    src={this.state.photoUrl} 
                    alt='error while loading.'
                />
                <p>
                    <a href={baseUrl + '@' + this.state.username}>@{this.state.username}</a> via <a href={baseUrl}>Unsplash</a>
                </p>
            </div>
        ) 
    }
}