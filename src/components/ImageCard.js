import React, { Component } from 'react';
import "./ImageCard.css";
import ImageModals from "./ImageModals";

class ImageCard extends Component {
    constructor(props) {
    super(props);
    this.state = {
        spans: 0,
        show: false
    }
    this.imageRef = React.createRef();
}


    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans : spans})
    }

    toggleModal = () => {
        this.setState({show: !this.state.show})
    }

    render() { 
        const {description, urls} = this.props.image;
        return (
            <div className="image-list" onClick={this.toggleModal} style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img className="gallery-container"
                ref={this.imageRef}
                src={urls.regular} 
                alt={description} />
                
                <i class="zoom icon"></i>
                {this.state.show ?
           <ImageModals imgSrc={urls.regular} togglemodal={this.toggleModal}/> :
           null
        }
            </div>
          );
    }
}
 
export default ImageCard;