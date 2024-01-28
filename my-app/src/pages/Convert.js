import React, {useState, useEffect} from "react";
import '../assets/styles/global.css'

const API_URL = 'https://open.er-api.com/v6/latest/'


function Convert() {

    const [currency, setCurrency] = useState([])
    const [input, setInput] = useState(0)
    const [output, setOutput] = useState(0)
    const [from, setFrom] = useState('RUB')
    const [to, setTo] = useState('USD')

    useEffect(() => {
        fetch(`${API_URL}${from}`)
        .then(response => response.json())
        .then(data => setCurrency(Object.entries(data.rates)))
    }, [from])

    
    function convert() {
        var rate = 0
        {currency.map((item) => {
            if (item[0] === to) {rate = item[1]}
        })}
        setOutput(input * rate);
    }

    return (
        <>
            <div className="Convert">
                <div className="amount">
                    <p>Amount</p>
                    <input onChange = {(e) => {setInput(e.target.value)}}/>
                </div>

                <div className="from">
                    <p>From</p>
                    <select defaultChecked={from} onChange={e => setFrom(e.target.value)} value = {from}>
                        {currency.map(item => <option key = {item[0]} value={item[0]}>
                            {item[0]} 
                        </option>)}
                    </select>
                </div>

                <div className="to">
                    <p>To</p>
                    <select defaultChecked={from} onChange={e => setTo(e.target.value)} value = {to}>
                        {currency.map(item => <option key = {item[0]} value={item[0]}>
                            {item[0]}
                        </option>)}
                    </select>
                </div>

                <div>
                    <button onClick={() => { convert() }}>Convert</button>
                    <p className="result">{input + " " + from + "=" + output.toFixed(2) + " " + to}</p>
                </div>
            </div>
        </>
    )
}
export default Convert;