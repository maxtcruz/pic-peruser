import React, { Component } from 'react';
import axios from 'axios';
import Photo from './Photo'

export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = 
            'Client-ID dea799253c3aaad7a360d101fe261d6f3d256c1cc0e34abe37edba7ecf91ef9f';

        axios.get('https://api.unsplash.com/photos/random?count=25')
            .then(result => {
                this.setState({photos: result.data});
            });
    }

    render() {
        return(
            <div className='grid'>
                {this.state.photos.map(photo => {
                    return <Photo url={photo.urls.regular} />
                })};
            </div>
        ) 

    }
}