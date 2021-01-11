import React, { Component } from "react";

import Customer from "./Customer";



class CustomerList extends Component {

  onDelete = (id) => {
    this.props.onDelete(id);
    //console.log("customer list ", id);
   
  }

  // pour Edit

  onEdit = data => {
    //console.log("customer list ", id);
    this.props.onEdit(data);
 
 };

  render() {
    // PROPS
    const customers = this.props.customers;
      return (
        <div className="data">
               <table className="ui celled table">
          
                
                <tbody>
                
                
                
                            
                {customers.map(customer => <Customer customer={customer}
                 key={customer.id}
                 onDelete={this.onDelete}
                 onEdit={this.onEdit}


                 />)}



                 </tbody>  
               </table>
            </div>

      );
       
  }

}


export default CustomerList;