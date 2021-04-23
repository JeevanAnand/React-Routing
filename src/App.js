import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from 'react-router-dom';
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
//Register our Routs , meaning we need to tell react component should be rendered based on a given URL

//while using Switch component , you should order your routes from most specific ones to most generic ones

// Route component is a wrapper around the component that we pass ,If the path matches it will render the component
//and it will automatically inject the  props (history,location,match) into the component
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* <Route path="/products" component={Products} /> In this case component holds default props */}
            {/* <Route path="/products" render={()=><Products sort="newest"/>}/> In this case we are overwriting default props  */}
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={(props) => <Products sort="newest"{...props} />} />   {/* In this case we are including both default and component specific props  */}
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
