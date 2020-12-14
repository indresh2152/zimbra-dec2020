import React from 'react';
import '../home/home.container.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.state = {
            products: [
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
                }
            ]
        };

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
        ]
    }

    handleCategoryChange(event) {
        let selectedCategory = parseInt(event.target.value, 10);
        let filteredProducts = this.allProducts.filter(obj => obj.categoryId === selectedCategory);
        this.setState({
            products: filteredProducts
        });
    }

    render() {
        let optionItems = this.categories.map((category) =>
            <option key={category.id} value={category.id}>{category.name}</option>
        );

        let products = this.state.products.map((product) =>
            <Link to={"/product/" + product.id} className="Products">
                <img src={product.imageUrl} alt="Not available"></img>
                <div>
                    {product.name}
                </div>
            </Link>
        );

        return (
            <div className="Container">
                <div>
                    Product Listing Page
                    <div className="Categories-container" >
                        <select name="laptop" id="products" className="Categories" onChange={this.handleCategoryChange}>
                            {optionItems}
                        </select>
                    </div>
                </div >
                <hr />
                <div className="Products-container">
                    {products}
                </div>
            </div >
        );
    }
}


export default Home;