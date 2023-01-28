import Header from './components/layout/header';
import { useState} from 'react';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './store/CartProvider';
function App(){
 
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return(
  // <div>
  //    <h1>Let's get Started</h1>
  // </div>
  

      <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}  />
        <main>
        <Meals/>
        </main>
  </CartProvider>
  );
}
// export default App;
// import React from "react";
// import Demo from "./Demo";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Nagis"
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("get derived state fom props", state);

//     return null;
//   }

//   render() {
//     return(
//       <div>
//         <p>Parent</p>
//         <Demo name={this.state.name}/>
//       </div>
//     )
//   }
// }

export default App;