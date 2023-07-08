import './App.css'

import './ProductData'
import ProductData from './ProductData'
// import Color from './color';
import { isArrayEmpty } from './utils'

const RenderColor = () => {
  const colorChoice = isArrayEmpty(ProductData.colorOptions) ? [] : ProductData.colorOptions.map((props, pos) => {
    console.log(props);

    return (
      <div className="col col-3">
          <img src={props.imageUrl} alt={props.styleName}></img>
      </div>
    )
  });
}

function App() {

  return (
    <>
      <header><img src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1536x465.png.webp" alt="Amazon logo" /></header>

      <div className="row bigRow">
        <div className="col col-6 h-80">
          <img className="big-img" src="https://imgur.com/iOeUBV7.png"></img>
        </div>
        <div className="col col-6">
          <h1>{ProductData.title}</h1>
          <p>{ProductData.description}</p>
          <h3>Select Color</h3>
          <div className="row">
            <RenderColor/>
            {/* <div className="col col-3">
              <img src="https://imgur.com/iOeUBV7.png" alt="Red Strap"></img>
            </div>
            <div className="col col-3">
              <img src="https://imgur.com/iOeUBV7.png" alt="Red Strap"></img>
            </div>
            <div className="col col-3">
              <img src="https://imgur.com/iOeUBV7.png" alt="Red Strap"></img>
            </div>
            <div className="col col-3">
              <img src="https://imgur.com/iOeUBV7.png" alt="Red Strap"></img>
            </div> */}
          </div>
          <h3>Features</h3>
          <div className="row">
              <button className="b-feature active">Time</button>
              <button className="b-feature">Heart Rate</button>
          </div>
          <div>
            <button className="b-buy">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
