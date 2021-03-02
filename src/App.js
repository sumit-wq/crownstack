import React from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import rootStore from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/categories";
const hist = createBrowserHistory();

function App() {
  return (
    <Provider store={rootStore()}>
      <Router history={hist}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <br />
          <Switch>
            <Route path={"/"} component={Categories}></Route>
          </Switch>
          {/* < Categories/> */}
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
