import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem"; 

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
  ];

  //hooks
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductlist = [...productList];

    //enter into the map

    newProductlist.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductlist);
    setTotalAmount(0);
  };

  //for the delete the product from the screen

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    newTotalAmount -= newProductList[index].price  *  newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem=(name,price)=>{
    let newProductList=[...productList];
    //console.log(productName,productPrice);
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}></AddItem>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
        <Footer
          totalAmount={totalAmount}
          resetQuantity={resetQuantity}
        ></Footer>
      </main>
    </>
  );
}

export default App;
