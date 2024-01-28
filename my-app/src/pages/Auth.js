import React, {useState, useEffect} from "react";
function Auth() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [login, setLogin] = useState(false)

    function verification() {
        if (name != '' || pass != '') 
        {
            setLogin(false)
        }
        else {setLogin(true)}
        console.log(login);
    }

    return (
        <>
            <div>
                <h1>Authorization</h1>
            </div>
            <div className="login">
                <input className="InputForm" placeholder="User Name" onChange={(e) => setName(e.target.value)} value = {name} />
            </div>
            <div>
                <input className="InputForm" placeholder="Password" onChange={(e) => setPass(e.target.value)} value = {pass}/>
            </div>
            <div>
                <button className="btnlog" type="submit" onClick={() => { verification() } }>Log in</button>
                <p>{"Login is " + login}</p>
            </div>
        </>
    )
}
export default Auth;