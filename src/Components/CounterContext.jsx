import React, { createContext, useState } from 'react'

export let CounterContext = createContext (0); 
export function CounterContextProvider (props){
    let [count, setCount] = useState(0); 

    function increase (){
        let localStorageString = localStorage.getItem('cart'); 
        let data = JSON.parse(localStorageString); 
        let counter = 0; 
        data.map((element, key)=>{
            counter += data[key].counter
        })
        console.log(data.length)
        setCount (counter); 
    }

    return <CounterContext.Provider value={{count, increase}}>
        {props.children}
    </CounterContext.Provider>
}