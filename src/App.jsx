import { useState } from 'react'
import './App.css'

function App(){
  const [balance, setBalance] = useState(0)

  const [transictions, setTransictions] = useState([])
   
 const [income, setIncome] = useState(0)
 const [outcome, setOutcome] = useState(0)
 
const incomeFunction = (event) => {
  event.preventDefault()
  
   let a = Number(event.target.amount.value)
   let b = event.target.desc.value
   const o = {
     amount: a,
     desc: b,
     type: "recieve"
   }
   setBalance(i => i + a)
   setTransictions(i => [...i, o])
   setIncome(i => i + a)
  
   
   }

  const dedactFunction =(event)=>{
event.preventDefault()
   let a = Number(event.target.amountMin.value)
   let b = event.target.descSec.value
   const o = {
     amount: a,
     desc: b,
     type: "payment"
   }
   setBalance(i => i - a)
   setTransictions(i => [...i, o])
   setOutcome(i =>i - a )
  }
 
  return (
    <div className='mainP'>
      <div className='numbers'>
      <p>Income: <br /> {income}</p>
      <p> Total balance: <br /> {balance}</p>
      <p> Expense: <br /> {outcome}</p>
      </div>
      <form onSubmit={incomeFunction}>
     <input name='amount' placeholder='Income' type="number" />
     <input type="text" name='desc'/>

     <button className='button green' type='submit'>Add</button>
     </form>
     <form onSubmit={dedactFunction}>
      <input placeholder='Expense' name='amountMin'  type="number" />
      <input  type="text" name='descSec'/>
      <button className='button red' type='submit'>Dedact</button>
    
     </form>
     {transictions.map(i => <div>
     <p className={i.type == "payment" ? "payment" : "recieve"}>  Amount: {i.type== "payment"? "-": "+"} $ {i.amount} | Desc: {i.desc}</p>

     </div>)}
    </div>
       )
}

export default App
