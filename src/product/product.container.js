import React from 'react';
import '../product/product.container.css';
import {withRouter} from 'react-router-dom';

class Product extends React.Component {
    constructor(props) {
        super(props);
        
        this.categories = [{
            "id": 1,
            "name": "Laptops"
        }, {
            "id": 2,
            "name": "Mobiles"
        }, {
            "id": 3,
            "name": "Speakers"
        }];
        
        this.allProducts = [
            {
                "id": 1,
                "name": "Lenovo",
                "imageUrl": "https://cors-anywhere.herokuapp.com/https://image.freepik.com/free-photo/notebook-sitting-floor-mockup_23-2148238657.jpg",
                "categoryId": 1
            },
            {
                "id": 2,
                "name": "Mac",
                "imageUrl": "https://cors-anywhere.herokuapp.com/https://image.freepik.com/free-photo/notebook-sitting-floor-mockup_23-2148238657.jpg",
                "categoryId": 1
            },
            {
                "id": 3,
                "name": "Dell",
                "imageUrl": "https://cors-anywhere.herokuapp.com/https://image.freepik.com/free-photo/notebook-sitting-floor-mockup_23-2148238657.jpg",
                "categoryId": 1
            },
            {
                "id": 4,
                "name": "Apple",
                "imageUrl": "https://image.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg",
                "categoryId": 2
            },
            {
                "id": 5,
                "name": "Google",
                "imageUrl": "https://image.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg",
                "categoryId": 2
            },
            {
                "id": 6,
                "name": "Samsung",
                "imageUrl": "https://image.freepik.com/free-vector/human-hand-holding-mobile-phone_74855-6532.jpg",
                "categoryId": 2
            },
            {
                "id": 7,
                "name": "Bose",
                "imageUrl": "https://image.freepik.com/free-vector/hand-drawn-megaphone-background_23-2148157409.jpg",
                "categoryId": 3
            },
            {
                "id": 8,
                "name": "JBL",
                "imageUrl": "https://image.freepik.com/free-vector/hand-drawn-megaphone-background_23-2148157409.jpg",
                "categoryId": 3
            },
            {
                "id": 9,
                "name": "Boat",
                "imageUrl": "https://image.freepik.com/free-vector/hand-drawn-megaphone-background_23-2148157409.jpg",
                "categoryId": 3
            }
        ];
    }

    componentDidMount() {
        let id = this.props.match && this.props.match.params && this.props.match.params.productId;
        let product = this.allProducts.filter(obj => obj.id == id)[0];
        product['categoryName'] = this.categories.filter(obj => obj.id == product.categoryId)[0]['name'];
        
        // fetch('/posts').then(obj => {
        //     console.log("obj ", obj);
        // })
    }

    render() {
        let id = this.props.match && this.props.match.params && this.props.match.params.productId;
        let product = this.allProducts.filter(obj => obj.id == id)[0];
        product['categoryName'] = this.categories.filter(obj => obj.id == product.categoryId)[0]['name'];

        return (
            <div className="Container">
                <div className="Title">
                    Product Details Page
                </div>
                <div className="Details">
                    <div className="Image">
                        <img src={product.imageUrl} alt="Not Available"></img>
                    </div>
                    <div className="Product-details">
                        <p>Category: {product.categoryName}</p>
                        <p>Product Name: {product.name}</p>
                        <p>Product Description</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Product);