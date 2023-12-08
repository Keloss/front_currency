import React, {useState, useEffect} from "react";
import '../assets/styles/global.css'

const API_URL = 'https://open.er-api.com/v6/latest/'


function Convert() {

    const [currency, setCurrency] = useState([])

    const [currentRate, setCurrentRate] = useState('RUB')

    useEffect(() => {
        fetch(`${API_URL}${currentRate}`)
        .then(response => response.json())
        .then(data => setCurrency(Object.entries(data.rates)))
    }, [currentRate])

    return (
        <>
            <div className="Convert">
                <div className="amount">
                    <p>Amount</p>
                    <input>
                    </input>
                </div>

                <div className="from">
                    <p>From</p>
                    <select defaultChecked={currentRate} onChange={e => setCurrentRate(e.target.value)}>
                        {currency.map(item => <option key = {item[0]} value={item[0]}>
                            {item[0]}
                        </option>)}
                    </select>
                </div>

                <div className="to">
                    <p>To</p>
                    <select defaultChecked={currentRate} onChange={e => setCurrentRate(e.target.value)}>
                        {currency.map(item => <option key = {item[0]} value={item[0]}>
                            {item[0]}
                        </option>)}
                    </select>
                </div>

                <div>
                    <button className="btn">Convert</button>
                </div>
            </div>
        </>
    )
}
export default Convert;