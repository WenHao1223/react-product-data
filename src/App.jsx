import './App.css'

import React, { Component } from 'react';
import ProductData from './ProductData'
import { isArrayEmpty } from './utils'
import Color from './color';

class App extends Component {
  state = {
    currentColor: "0",
    featureActive: "0"
  }

  colorChange = (pos) => {
    this.setState({currentColor: pos});
  }

  featureActiveChange = (pos) => {
    this.setState({featureActive: pos});
  }
  
  render(){
    console.log("Render called");

    const RenderColor = () => isArrayEmpty(ProductData.colorOptions) ? [] : ProductData.colorOptions.map((props, pos) => {
      return (
          <Color imageUrl={props.imageUrl} styleName={props.styleName} key={pos} colorChange={() => this.colorChange(pos)}/>
      );
    });

    const RenderFeature = () => isArrayEmpty(ProductData.featureList) ? [] : ProductData.featureList.map((props, pos) => {
      const featureClass = pos == this.state.featureActive ? "b-feature active" : "b-feature";
      return (
        <button className={featureClass} key={pos} onClick={() => this.featureActiveChange(pos)}>{props}</button>
      );
    });

    return (
      <>
        <header>
          <img src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1536x465.png.webp" alt="Amazon logo" />
        </header>
  
        <div className="row bigRow">
          <div className="col col-6 h-80">
            <img className="big-img" src={ProductData.colorOptions[this.state.currentColor].imageUrl}></img>
          </div>
          <div className="col col-6">
            <h1>{ProductData.title}</h1>
            <p>{ProductData.description}</p>
            <h3>Select Color</h3>
            <div className="row">
              <RenderColor/>
            </div>
            <h3>Features</h3>
            <div className="row">
                <RenderFeature/>
            </div>
            <div>
              <button className="b-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App
