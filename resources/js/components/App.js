import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import Loader from "./Loader";
import "./app.css";
import Nav from "./Nav/Nav";
import Signup from "./signUp/Signup";
import Signin from "./SignIn/Signin";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";



class App extends Component {

// Declaration du tableaux
    state = {
        customers: [],
        loader: false,
        // zidna cette ligne
        customer: {},
        url: 'http://localhost/tache/public/api/customers'
    };
    // axios
    getCustomers = async () => {
        this.setState({ loader: true });
        const customers = await axios.get(this.state.url);
        this.setState({ customers: customers.data, loader: false });

    };

      // pour delete


    deleteCustomer = async id => {
    this.setState({ loader: true });
    await axios.delete(`${this.state.url}/${id}`);

    this.getCustomers();
    };

    // pour creation
    createCustomer = async data =>{
        this.setState({ loader: true });

        await axios
        .post(this.state.url, {
          name: data.name,
          description: data.description,

        });
        this.getCustomers();
      };

    // edit

    editCustomer =  async (data) =>{
        // clear customer obj
     this.setState({ customer: {}, loader: true });

     await axios
       .put(`${this.state.url}/${data.id}`, {
        name: data.name,
        description: data.description,

       });

     this.getCustomers();
   };



    componentDidMount() {
        this.getCustomers();
    }


    // pour delete
  onDelete = (id) => {
    //console.log("app ", id);
    this.deleteCustomer(id);

};

  // pour edit
  onEdit = data => {
  //console.log("app ", data);
  this.setState({ customer: data });

    };

// zidna cette ligne

onFormSubmit = (data) => {
    //console.log("app ", data);
    if (data.isEdit) {
     // if is edit true
     this.editCustomer(data);
   } else {
     // if is edit false
     this.createCustomer(data);
   }

 };

    render() {

        let navLink = (
            <div className="Tab">
                <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
                    Sign In
                </NavLink>
                <NavLink exact to="/" activeClassName="activeLink" className="signUp">
                    Sign Up
                </NavLink>
            </div>
        );
        const login = localStorage.getItem("isLoggedIn");

        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div>

                        <a href="/#" className="header item">
                            React JS CRUD with Laravel API
                        </a>


                    </div>


                </div>


                <div className="App">
                    {login ? (
                        <Router>
                            <Route exact path="/" component={Signup}></Route>
                            <Route path="/sign-in" component={Signin}></Route>
                            <Route path="/home" component={Home}></Route>
                        </Router>
                    ) : (
                        <Router>
                            {navLink}
                            <Route exact path="/" component={Signup}></Route>
                            <Route path="/sign-in" component={Signin}></Route>
                            <Route path="/home" component={Home}></Route>
                        </Router>
                    )}
                </div>


                <div  className="ui main container">


                    {this.state.loader ? <Loader /> : ""}


                    <h3>Liste des taches</h3>
                    <div class="mb-3">
                    <CustomerList
                        customers={this.state.customers} onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    />
               </div>


                  <h3>  Creer une nouvelle tache </h3>
               <div class="mb-3 row">

                   <MyForm
                   // zidna cette ligne onFormSubmit={this.onFormSubmit}
                      onFormSubmit={this.onFormSubmit}
                     customer={this.state.customer}
                   />
                        </div>
                </div>

            </div>
        );
    }

}


export default App;
