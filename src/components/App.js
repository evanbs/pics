import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

export default class App extends Component {
    state = {
        images: []
    };

    async onSearchSubmit(term) {
        const response = await unsplash.get(`/search/photos/`, {
            params: {
                query: term
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
