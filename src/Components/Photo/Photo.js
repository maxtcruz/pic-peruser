import React, { Component } from 'react';
import axios from 'axios';
import './Photo.css';

export default class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoUrl: props.photoUrl,
            username: props.username,
            downloadUrl: props.downloadUrl,
        }
    }

    downloadImage() {
        axios.get(this.state.downloadUrl)
            .then(result => {
                window.open(result.data.url);
            })
            .catch(error => {
                alert(error.response.data.errors);
            });
    }

    render() {
        let baseUrl = 'https://unsplash.com/'

        return(
            <div className='photo'>
                <img 
                    onClick={this.downloadImage.bind(this)}
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