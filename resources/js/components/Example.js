import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./app.css";
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import "./app.css";


function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">

                        <App/>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
