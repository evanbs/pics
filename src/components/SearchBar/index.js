import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.inputReference = React.createRef();
    }

    componentDidMount() {
        this.inputReference.current.focus();
    }

    componentDidUpdate() {
        this.inputReference.current.focus();
    }

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
                            ref={this.inputReference}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
