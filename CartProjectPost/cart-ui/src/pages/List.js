import React, { Component } from 'react'
import GetAll from './getMethods/getAll';
import GetASC from './getMethods/GetASC';
import GetDSC from './getMethods/GetDSC';
import MaxPrice from './getMethods/MaxPrice';
import MinPrice from './getMethods/MinPrice';
import {Link} from 'react-router-dom'
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      asc:false,
      dsc:false,
      price:0,
      priceBool:false,
      priceMin:0,
      priceMinBool:false
    }
  }
  
  handleChange = (e) => {
    const { checked } = e.target
    this.setState({
      checked: checked
    })
  }

  handleASC = (e) => {
    const { checked } = e.target
    this.setState({
      asc: checked
    })
  }
  handleDSC = (e) => {
    const { checked } = e.target
    this.setState({
      dsc: checked
    })
  }
  handlePrice = (event) =>{
    this.setState({
      price:event.target.value
  })
  }
  handlePriceBool = () =>{
    this.setState({
      priceBool:!this.state.priceBool
    })

  }
  handleMinPrice = (e) =>{
    this.setState({
      priceMin:e.target.value
    })
  }
  handlePriceMinBool = () => {
    this.setState({
      priceMinBool:!this.state.priceMinBool
    })
  }

  render() {
    return (
      <div>
          <div className='list-header'>
          Filters/Edit/Delete Page
          </div>
        <div className='list-links'>
          <Link to = '/adminMain'>Main  </Link>
          <br></br>
          <Link to ='/create'>Create</Link>
          <br></br>
          Filter/Edit/Delete
          <br></br>
          <br></br>
          </div>
        <input type="checkbox"
               onChange={e => this.handleChange(e)}
               defaultChecked={this.state.checked}/>
        Edit/Delete
        {/* {this.state.checked.toString()} */}
        {this.state.checked ? <GetAll/> : ""}
        <br></br>
        Filters:
        <br></br>
        <input type="checkbox"
               onChange={e => this.handleASC(e)}
              defaultChecked={this.state.asc}/>
        Ascending alphabetically
        {this.state.asc ? <GetASC/> : ""}
        <br></br>
        <input type="checkbox"
               onChange={e => this.handleDSC(e)}
              defaultChecked={this.state.dsc}/>
        Descending alphabetically
        {this.state.dsc ? <GetDSC/> : ""}
        <br></br>
        Max Price<input type = "number" value = {this.state.price} onChange={this.handlePrice}/>
        <button TonClick={this.handlePriceBool}>Go</button>
        {this.state.priceBool ? <MaxPrice id={this.state.price.toString()}/> : "" }
        <br></br>
        Min Price <input type = "number" value={this.state.priceMin} onChange={this.handleMinPrice} ></input>
        <button onClick = {this.handlePriceMinBool}>Go</button>
        {this.state.priceMinBool ? <MinPrice id = {this.state.priceMin.toString()}/>:""}
      </div>


    )
  } 
}


export default List



