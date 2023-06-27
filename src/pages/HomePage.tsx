import { useDispatch, useSelector } from "react-redux";
import { incrementa, decrementa, aumenta, selectCounter, getRandom } from "../slices/counterSlice";
import axios from "axios";

const HomePage = () => {

    // const [cont, setCont] = useState(0);
    const dispatch = useDispatch();
    const cont = useSelector( selectCounter );

    // const getRandom = async () => {
    //     const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new';
    //     const res = await axios.get(url);
    //     console.log(res.data);
    //     dispatch( aumenta(res.data))
    // }

    return (
        <>
            <h1>HomePage</h1>
            <div>
                <h2>{cont}</h2>
                <button onClick={ () => dispatch( incrementa() ) }>Incrementa</button>
                <button onClick={ () => dispatch( decrementa() ) }>decrementa</button>
                <button onClick={ () => dispatch( aumenta(8) ) }>aumenta</button>
                <button onClick={ () => dispatch( getRandom()) }>random</button>
            </div>
        </>
    );
}
export default HomePage;