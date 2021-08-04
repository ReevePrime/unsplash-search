import React, {Component} from 'react';
import {Button, Modal, Image} from "react-bootstrap/";
import "./ImageCard.css";

class ImageModals extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (    
       <Modal contentClassName="myModal" keyboard={true} centered show={true}>
        <Modal.Body >
        <Image fluid contentClassName="modal-image" src={this.props.imgSrc} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.togglemodal}>Close</Button>
            </Modal.Footer>
        </Modal> 
     );
    }
}
 
export default ImageModals;