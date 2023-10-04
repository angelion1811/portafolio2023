import { useState } from "react";
const useStarted = () => {
    const [started, setStarted] = useState([]);
    const [animatedClass, setAnimateClass] = useState([]);
    const startAnimation = async (index) => {
        if(started[index])
            return;

        setAnimateClass(animatedClass.map((e, i)=>{
            if(i===index)
                e = "animated"
            return e;
        }));

        setStarted(started.map((e, i)=>{
            if(i===index)
                e = true
            return e;
        }));
        
        await setTimeout(()=>{
            setAnimateClass(animatedClass.map((e, i)=>{
                if(i===index)
                    e = ""
                return e;
            }));
        },5000);
    }
    const initialChange = async (i) =>{
        let arrayAnimate = [];
        let arrayStarted = [];
        for (let index = 0; index < i; index++) {
            arrayAnimate.push("");
            arrayStarted.push(false);
        }
        setStarted(arrayStarted);
        setAnimateClass(arrayAnimate);
    }
    return{
        started, setStarted,
        animatedClass, setAnimateClass,
        startAnimation,
        initialChange,
    }
}

export default useStarted;