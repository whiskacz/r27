import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { CurrencyContainer, MainContainer } from './style/styled.js'
import { CurrencyContext } from './context/CurrencyContext.js';
import { coursesDB  } from './databases/coursesDB.js';
import { currencyDB } from './databases/currencyDB.js';
import Course from './components/Course.jsx';

function R27App () {
    
    const[currency,setCurrency] = useState(currencyDB.Zloty)
    

    return (
  
    <CurrencyContext.Provider value={currency}>
       <CurrencyContainer>
            <div style={{
                textAlign:'left',
                width:"100%",
                margin:"10px"

            }}>Chose your currency</div>
            <div style={{
                width:"100%",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                {Object.values(currencyDB).map((currency) => (
                    <button style={{
                        width:"40px",
                        background:"white",
                        cursor:"pointer",
                        padding:" 2px 5px",
                        borderRadius:"3px",
                        border:"0.3px solid black"
                    }}
                    key={currency.title}
                    onClick={()=>setCurrency(currency)}
                    >
                    {currency.code}
                    </button>
                        
                ))}
                
            </div>
       </CurrencyContainer> 
       <div style={{
        display:"flex",
        width:"100%",
        height:"80vh",
        justifyContent:"center",
        alignItems:"center",
       
    }}>
       <MainContainer>
        <div style={{
            fontSize:"4rem"
        }}>
            Course
        </div>
        <div style={{
            fontSize:"2rem"
        }}>
            BECOME A WEB DEVELOPER
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, quia animi. A, vel! Nam molestiae labore, inventore eum consequuntur ducimus dolor aliquid beatae! Obcaecati ipsum omnis magnam ullam temporibus? Ex.
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:"20px",

        }}>
           {coursesDB.map((item) => (
            <Course key={item.id} item={item} rate={currency.rate} code={currency.code} />
           ))}
        </div>
       </MainContainer>
       </div>
    </CurrencyContext.Provider>
   

    )}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<R27App />)