import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";

function Main(){
    return(
        <Provider store={store}>
            <CoinCreate/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);