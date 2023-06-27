import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCounter } from "../slices/counterSlice";
import { Category } from "../models/Category";
const NavBar = () => {

    const [categories, setCategories] = React.useState<Category[]>([]);

    const loadCategories = async() => {
        const url = 'http://localhost:3000/categories';
        const response = await axios.get(url);
        setCategories(response.data);
    }

    React.useEffect( () => {
        loadCategories();
    }, []);

    const pippo = useSelector(selectCounter);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    {
                        categories.map( el => {
                            return (
                                <li className="nav-item" key={el.id}>
                                    <NavLink className="nav-link" to={ `/categories/${el.id}` }>{ el.name }</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className="navbar-nav">
                    <li>
                        <NavLink className="nav-link" to="/cart">Carrello</NavLink>
                        { pippo }
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;