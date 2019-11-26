import React, { Component } from 'react';

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
var nameRegex = /^[a-zA-Z]/;

// accept array / multiple
function validateInput() {
    let errors = {};
    for (var i = 0 ; i < arguments.length ; i++) {
        let input = arguments[i];
        let validationType = input.getAttribute("data-validation-type");
        if (validationType === null){
            validationType = input.type;
        }
        let errorName = input.name + "Error";
        // console.log("input validation attr:", input.getAttribute("data-validation-type"), "input.value:", input.value);

        errors[errorName] = "";

        if (validationType === "name") {
            if (input.value.match(nameRegex) === null || input.value.length < 3) {
                errors[errorName] = "Username must be 3 characters minimum";
            }
        } else if (validationType === "email") {
            if (input.value.match(emailRegex) === null) {
                errors[errorName] = "Email must be a valid email address";
            }
        }
        if (validationType === "message"){
            if (input.value.length < 10){
                errors[errorName] = "Message must be 10 characters minimum";
            }
        }
    }
    return errors;
}

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            email: "",
            emailError: "",
            message: "",
            messageError: "",
            selectedCategory: "",
            submitted: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    handleInputChange = e => {
        let input = e.target;
        // this.setState({ ...this.state, [input.name]: input.value });
        let errors = validateInput(input);
        this.setState({ ...this.state, [input.name]: input.value, ...errors });
    };
    onBlur = e => {
        let input = e.target;
        this.setState({ ...this.state, [input.name]: input.value });
        setTimeout(() => {                                     // setTimeout for blur
            if (!input.contains(document.activeElement)) {
                let errors = validateInput(input);             // run validation against this input, and return error object
                this.setState({ ...this.state, ...errors });   // update state with returned errors
                // console.log("errors", errors);
            }
        }, 0);
    };
    handleSubmit(e) {
        e.preventDefault();
        let errors = validateInput(e.target.name, e.target.email);
        this.setState({ ...this.state, ...errors });

        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let nameError = this.state.nameError;
        let emailError = this.state.emailError;
        let messageError = this.state.messageError;
        let submitted = this.state.submitted;

        /*
         In case of things going awry with the contact form, use these logs
         console.log('handleSubmit');
         console.log(e.target.name.value);
         console.log('errors', errors);
         console.log('nameError', nameError);
         console.log('emailError', emailError);
         console.log('messageError', messageError);
         console.log('submitted', submitted);
         */

        // Submits the form if there are no blank fields in it and no errors are present
        if (nameError == "" && name != "" && emailError == "" && email != "" && messageError == "" & message != "") {
            this.setState({
                submitted: `Submitted. An email will be sent to you shortly. Thank you for helping us make the game better.`
            });
        } else {
            this.setState({
                submitted: `Not Submitted. Please check your errors.`
            });
        }
    }
    render() {
        return (
            <div
                class="col s6 m6"
                id="contact"
            >
                <form
                      action=""
                      onSubmit={this.handleSubmit}
                      noValidate >
                    <div>
                        <input
                            type="text"
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                            onBlur={this.onBlur}
                            placeholder="Username"
                            data-validation-type="name"
                            required />
                    </div>
                    <div>
                        <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            onBlur={this.onBlur}
                            placeholder="Email"
                            data-validation-type="email"
                            required />
                    </div>
                    <label>
                        <input
                            onChange={this.handleInputChange}
                            name="selectedCategory"
                            type="radio"
                            value="Bug Report" />
                             Bug Report
                    </label><br/>
                    <label>
                        <input
                            onChange={this.handleInputChange}
                            name="selectedCategory"
                            type="radio"
                            value="Question" />
                             Question
                    </label><br/>
                    <label>
                        <input
                            onChange={this.handleInputChange}
                            name="selectedCategory"
                            type="radio"
                            value="Suggestion" />
                             Suggestion
                    </label>
                    <div>
                        <textarea
                            type="text"
                            value={this.state.message}
                            name="message"
                            onChange={this.handleInputChange}
                            onBlur={this.onBlur}
                            data-validation-type = "message"
                            placeholder="Message" />
                    </div>
                    <button type="submit">Submit</button>
                    <p className="m-0">{this.state.submitted}</p>
                    <p className="m-0">{this.state.nameError}</p>
                    <p className="m-0">{this.state.emailError}</p>
                    <p className="m-0">{this.state.messageError}</p>
                </form>
            </div>
        );
    }
}
