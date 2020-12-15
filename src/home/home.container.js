import React from 'react';
import '../home/home.container.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.state = {
            areCategoriesLoaded: false,
            areAllProductsLoaded: false,
            categories: [],
            allProducts: [],
            products: [],
            error: ""
        };
    }

    async componentDidMount() {
        await fetch("/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("Categories Result ", result)
                    this.setState({
                        areCategoriesLoaded: true,
                        categories: result
                    });
                },
                (error) => {
                    this.setState({
                        areCategoriesLoaded: true,
                        error
                    });
                }
            );
        
        await fetch("/allProducts")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("All products result ", result)
                    this.setState({
                        areAllProductsLoaded: true,
                        allProducts: result
                    });
                },
                (error) => {
                    this.setState({
                        areAllProductsLoaded: true,
                        error
                    });
                }
            )
        
        if (this.state.allProducts.length > 0 && this.state.categories.length > 0) {
            let products = this.state.allProducts.filter(obj => obj.categoryId === this.state.categories[0].id);
            this.setState({
                products: products
            })
        }
    }

    handleCategoryChange(event) {
        let selectedCategory = parseInt(event.target.value, 10);
        let filteredProducts = this.state.allProducts.filter(obj => obj.categoryId === selectedCategory);
        this.setState({
            products: filteredProducts
        });
    }

    render() {
        let optionItems = this.state.categories.map((category) =>
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