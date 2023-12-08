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

    return (
        <>
            <div>
                <div className="select">
                    <p>Base currency: </p>
                    <select className="select2" defaultValue={currentRate} onChange={e => setCurrentRate(e.target.value)}>
                        {currency.map(item => <option key={item[0]} value={item[0]}>
                            {item[0]}
                            </option>)}
                    </select>
                </div>
                <div>
                    <table className="table">
                    <thead>
                    <tr className="tr">
                        <th>Currency</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currency.map((item, index) => (
                        index > 0 &&
                        <tr>
                        <td>{`${item[0]}/${currentRate}`}</td>
                        <td>{(1/item[1]).toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
        
    );
    
}
export default Home;