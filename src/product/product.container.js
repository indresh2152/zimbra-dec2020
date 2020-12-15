import React from 'react';
import '../product/product.container.css';
import {withRouter} from 'react-router-dom';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    async componentDidMount() {
        let id = this.props.match && this.props.match.params && this.props.match.params.productId;
        
        await fetch("/allProducts/"+id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Categories Result ", result)
                    this.setState({
                        isProductLoaded: true,
                        product: result
                    });
                },
                (error) => {
                    this.setState({
                        isProductLoaded: true,
                        error
                    });
                }
            );
    }

    render() {

        return (
            <div className="Container">
                <div className="Title">
                    Product Details Page
                </div>
                <div className="Details">
                    <div className="Image">
                        <img src={this.state.product.imageUrl} alt="Not Available"></img>
                    </div>
                    <div className="Product-details">
                        <p>Category: {this.state.product.categoryName}</p>
                        <p>Product Name: {this.state.product.name}</p>
                        <p>Product Description</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Product);