import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        term: ''
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
                    <div className="field">
                        <label htmlFor="term">Image Search</label>
                        <input
                            type="text"
                            id="term"
                            value={this.state.term}
                            onChange={(event) => this.setState({ term: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
