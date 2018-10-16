import React, { Component } from 'react';
import axios from 'axios';
import Photo from '../Photo/Photo'
import RefreshButton from '../RefreshButton/RefreshButton';
import { Config } from '../../Config';
import './PhotoStream.css';

export default class PhotoStream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = 'Client-ID ' + Config.accessKey;

        axios.get('https://api.unsplash.com/photos/random?count=25')
            .then(result => {
                this.setState({photos: result.data});
            })
            .catch(error => {
                alert(error.response.data.errors);
            });
    }

    render() {
        return(
            <div className='photoStream'>
                <RefreshButton clickHandler={this.componentDidMount.bind(this)} />
                {this.state.photos.map(photo => {
                    return <Photo 
                        key={photo.id}
                        photoUrl={photo.urls.small} 
                        username={photo.user.username} 
                        />
                })}
            </div>
        ) 

    }
}