import React from 'react'
import States from './States'
import { Link } from 'react-router-dom'
import shopping from './LogoImage/shopping.png'
export default function CusCheckout() {
  const submitForm = () => {
    alert('Thanks for Placing your order')
  }
  return (
    <div >
      <Link to='/' className='nav-logo' ><img src={shopping} alt='logo' style={{ marginLeft:'50%',height: '30%', width: '10%' }} /></Link>
      <form onSubmit={submitForm} >
        <div>
        Shipping Info
        <br></br>
        Email
        <br></br>
        <input required placeholder="abc@gmail.com" />
        <br></br>
        first name
        <br></br>
        <input value={localStorage.getItem('customerName')} />
        <br></br>
        last name
        <br></br>
        <input required placeholder="Doe" />
        <br></br>
        Address
        <br></br>
        <input required placeholder="123 Street" />
        <br></br>
        Zip Code
        <br></br>
        <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} required placeholder="12345" />
        <br></br>
        City
        <br></br>
        <input required placeholder="Sacremento" />
        <br></br>
        State
        <br></br>
        <States />
        <br></br>
        <br></br>
        </div>
        <div style={{marginLeft:'15%',marginTop:'-22%'}}>
        CC Info
        <br></br>
        Card Type
        <br></br>
        <select>
          <option value="Visa">Visa</option>
          <option value="Discover">Discover</option>
          <option value="American Express">American Express</option>
        </select>
        <br></br>
        Card number
        <br></br>
        <input onInput={(e) => e.target.value = e.target.value.slice(0, 16)} type="number" required placeholder="4498 9395 4270 3680" />
        <br></br>
        Name on card
        <br></br>
        <input required placeholder="John Doe" />
        <br></br>
        Expiration date
        <br></br>
        <div className="exp-wrapper">
          <input autoComplete="off" className="exp" id="month" maxLength={"2"} pattern="[0-9]*" inputMode="numerical" placeholder="MM" type="text" data-pattern-validate />
          <input autoComplete="off" className="exp" id="year" maxLength={"2"} pattern="[0-9]*" inputMode="numerical" placeholder="YY" type="text" data-pattern-validate />
        </div>
        <br></br>
        CVV
        <br></br>
        <input onInput={(e) => e.target.value = e.target.value.slice(0, 3)} required placeholder="123" type="number" />
        <br></br>
        Shipping Address
        <br></br>
        <input required placeholder="123 Street" />
        <br></br>
        </div>
        <button type="submit" style={{ borderRadius: '10px', background: '#39e75f', borderColor: 'white', outline: 'none', height: '40px', width: '150px', fontFamily: 'Papyrus', fontSize: '20px', marginLeft:'15%' }}>Place Order</button>
        
      </form>
    </div>
  )
}
