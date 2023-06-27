import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {

    const { id: idCategory } = useParams();

    const [products, setProducts] = React.useState<any[]>([]);

    const loadProductsByCategory = async (idCategory: number) => {
        const url = 'http://localhost:3000/products';
        const params = {
            'category_id': idCategory
        };
        const response = await axios.get(url, { params });
        setProducts(response.data);
    }

    useEffect( () => {
        loadProductsByCategory(Number(idCategory));
    }, [idCategory])


    return (
        <>
            <h1>CategoryPage { idCategory }</h1>

            <div className="d-flex flex-wrap">
                {
                    products.map( el => {
                        return (
                            <div className="card" style={ { 'width': '18rem', } } key={el.id}>
                                <img src={el.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.description}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default CategoryPage;