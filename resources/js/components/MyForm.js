import React, { Component } from "react";

class MyForm extends Component {
  state = {
    form: { name: "", description: "",  isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  };

  isEmptyObj(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

    // pour update

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmptyObj(this.props.customer)) {
      this.setState({
        form: { ...this.props.customer, isEdit: true },
        btnName: "Update",
        btnClass: "ui orange button submit-button"
      });
      //console.log("update");
    }

  }

// handle change

  handleChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  //pour button save
  onFormSubmit = event => {
    // prevent form submit
    event.preventDefault();

    // form validation
    if (this.formValidation()) {
       // send form data to app
       this.props.onFormSubmit(this.state.form);


    }
    // vider les champs du tableaux
    this.clearFormFields();


  };
     // vider les champs du formulaire
     // clear form fields
     clearFormFields = () => {
       // change from state
       this.setState({
        form: { name: "", description: "", isEdit: false },
       });
       //

       // change the button to save
      this.setState({
        btnName: "Save",
        btnClass: "ui primary button submit-button"
      });

        // clear form fields
    document.querySelector(".form").reset();

     };



// pour valider le formulaire

  formValidation = () => {
    //  name
    if (document.getElementsByName("name")[0].value === "") {
      alert("Enter  name");
      return false;
    }

    // description
    if (document.getElementsByName("description")[0].value === "") {
      alert("Enter description");
      return false;
    }

    return true;
  };


    render() {
    return (
        <form className="ui form ">
            <div className="fields">
                <div className="four wide field">
 <label>Nom </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.form.name}
              />


            </div>

<div className="four wide field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={this.handleChange}
              value={this.state.form.description}
               />


          </div>

          <div className="two wide field">
          <button className={this.state.btnClass} onClick={this.onFormSubmit}>
              {this.state.btnName}
            </button>

          </div>


                </div>



        </form>

    );
}
}

export default MyForm;
