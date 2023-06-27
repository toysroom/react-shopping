import { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {

    const [cart, setCart] = useState<any[]>([]);

    const loadCart = async() => {
        const url = 'http://localhost:3000/cart';
        const response = await axios.get(url);
        setCart(response.data);
    }

    useEffect( () => {
        loadCart();
    }, []);


    const delFromCart = async (cartItem: any) => {
        try {
            const url = 'http://localhost:3000/cart/'+cartItem.id;
            await axios.delete(url);
            // const products2 = cart.filter( el => el.id !== cartItem.id)
            setCart( cart.filter( el => el.id !== cartItem.id) );
        }
        catch (e) {
            // ....
        }
    }

    const changeQty = async (evt: any, cartItem: any) => {
        const qty = Number(evt.target.value);
        const url = 'http://localhost:3000/cart/'+cartItem.id;

        const data = {
            ...cartItem, qty
        };

        const response = await axios.put(url, data);

        setCart(
            cart.map( el => el.id === cartItem.id ? response.data : el )
        );

    }

    return (
        <>
            <h1>CartPage</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Prezzo</th>
                    <th scope="col">Quantità</th>
                    <th scope="col">Totale</th>
                    <td>Cancella</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map( (el, index) => {
                            return (
                                <tr key={el.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{el.title}</td>
                                    <td>{el.price}</td>
                                    <td>
                                        <input type="number" value={el.qty} onChange={(e) => changeQty(e, el) } />
                                    </td>
                                    <td>{el.qty *el.price}</td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => delFromCart(el) }>
                                            Cancella
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}></td>
                        <td>
                            {
                                cart.reduce( (tot, el) => tot += el.qty*el.price, 0)
                            }
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
export default CartPage;