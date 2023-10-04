import { useEffect, useState } from "react";

const Preloader = () =>{
    const [show, setShow] = useState(true)
    useEffect(()=>{
        setTimeout(()=>setShow(false), 1000)
    },[])
    return<>
    <div className="preloader" style={{"display": show?"block":"none"}}>
    <div className="lds-ellipsis" style={{"display": show?"block":"none"}}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
    </>
}

export default Preloader;