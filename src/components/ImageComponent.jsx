import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return <div>
            <img className="gatto" src={this.props.src} alt={this.props.alt} />
            </div>
        
    }
}

export default ImageComponent