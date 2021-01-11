import React, { Component } from "react";


class Customer extends Component {

    // zidna cette ligne
    onDelete = () => {
        //console.log("customer on delete");
        this.props.onDelete(this.props.customer.id);
       
       };

    // on edit

    onEdit = () => {
        //console.log("customer on Edit");
        this.props.onEdit(this.props.customer);
       
     };   

    render() {

        // declarer les variables
        const { id, name, description } = this.props.customer;

        return (
            <tr>
               
                <td>{`${name} `}</td>
                <td>{description}</td>

                <td>
                    <button className="mini ui blue button"  onClick={this.onEdit}>Edit</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Delete</button>
                </td>

            </tr>


        );



    }

}
export default Customer;
