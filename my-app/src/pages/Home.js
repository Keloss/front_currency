import React, {useState, useEffect} from "react";
import '../assets/styles/global.css'
const API_URL = 'https://open.er-api.com/v6/latest/'


function Home() {

    const [currency, setCurrency] = useState([])

    const [currentRate, setCurrentRate] = useState('RUB')

    useEffect(() => {
        fetch(`${API_URL}${currentRate}`)
        .then(response => response.json())
        .then(data => setCurrency(Object.entries(data.rates)))
    }, [currentRate])
    
    console.log(currency)

    return (
        
        <>
            <div>
                <h1>This homepage will have a table</h1>
                <div className="select">
                    <p>Base currency: </p>
                    <select defaultValue={currentRate} onChange={e => setCurrentRate(e.target.value)}>
                        {currency.map((item, index) => <option key={item[0]} value={item[0]}>
                            {item[0]}
                            </option>)}
                    </select>
                </div>
                <div>
                    {currency.map(item => <p>{`${item[0]}: ${1 / item[1]}`}</p>)}
                </div>
            </div>
        </>
        
    );
    
}
export default Home;