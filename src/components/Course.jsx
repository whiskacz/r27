import React, { useState, useEffect } from 'react'
import { CurrencyContext } from '../context/CurrencyContext';

export default function Course( { item }) {
    
    const { img, title, price } = item

    const currency = React.useContext(CurrencyContext)
    
    const [panelColor,setPanelColor] = useState("red")

    useEffect(()=>{
    if(currency.code === "PLN"){
        setPanelColor("red")
    }  
    if(currency.code === "€"){
        setPanelColor("blue")
    }  
    if(currency.code === "$"){
        setPanelColor("orange")
    }   
    
    }, [currency.code])
  
    return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        width:"30%",
        height:"400px",
        backgroundColor:"",
        border:` 0.5px solid ${panelColor}`,
        borderRadius:"10px",
        justifyContent:"space-between",
       
     

    }}>
        <div style={{
            borderRadius:"10px 10px 0px 0px",
            backgroundColor: panelColor,
            padding:"10px"
        }}>
            The road to {title}
        </div>
        <div style={{
            textAlign:"center",
            marginTop:"10px",
        }}>
            <img style={{
                width:"90%",
                height:"70%",
               
            }} src={img} alt="course img" />
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum non autem culpa,?</span>
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor: panelColor,
            borderRadius:"0px 0px 10px 10px",
            padding:"10px",
            
        }}>
            <div>{(price * currency.rate) + " " + currency.code}</div>
            <button style={{
                border:"none",
                background:"#0cc01b",
                color:'white',
                cursor:"pointer",
                
            }}
            > Buy</button>
        </div>

    </div>
  )
}
