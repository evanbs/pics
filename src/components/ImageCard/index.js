import React, { Component } from 'react';

export default class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.imageReference = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        this.imageReference.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageReference.current.clientHeight;
        const spans = Math.ceil(height / 10 + 5);

        this.setState({ spans });
        this.imageReference.current.opacity = '0';
    };

    render() {
        const { urls, alt_description } = this.props.image;
        const isHeightCalculated = this.state.spans > 0;
        const divStyle = {
            backgroundImage: `url(${urls.regular})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            gridRowEnd: `span ${this.state.spans}`,
            marginBottom: isHeightCalculated ? '10px' : '0'
        };
        const imageStyle = {
            display: isHeightCalculated ? 'none' : 'block'
        };

        return (
            <div style={divStyle}>
                <img src={urls.thumb} alt={alt_description} ref={this.imageReference} style={imageStyle} />
            </div>
        );
    }
}
