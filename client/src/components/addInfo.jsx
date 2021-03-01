import React, { Component } from "react";

import $ from "jquery";

class AddPerson extends Component {
  state = {
    name: "",
    shortname: "",
    known: "",
    bio: ""
  };
  render() {
    return (
      <div
        style={{
          border: "2px inset",
          borderRadius: "15px",
          borderColor: "black",
          padding: "10px"
        }}
      >
        <legend
          style={{
            marginLeft: "25%",
            padding: "20px",
            backgroundColor: "gray",
            width: "40%",
            textAlign: "center"
          }}
        >
          Add Person
        </legend>
        <div style={{ marginLeft: "25%" }}>
          <br></br>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              style={{ width: "50%" }}
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
            <br></br>

            <label htmlFor="surname">Shortname:</label>
            <input
              type="text"
              id="surname"
              name="shortname"
              className="form-control"
              style={{ width: "50%" }}
              value={this.state.shortname}
              onChange={this.handleChange}
            ></input>
            <br></br>

            <label htmlFor="reknown">Known:</label>
            <input
              type="text"
              id="reknown"
              name="known"
              className="form-control"
              style={{ width: "50%" }}
              value={this.state.known}
              onChange={this.handleChange}
            ></input>
            <br></br>

            <label htmlFor="bio">Bio:</label>
            <textarea
              className="form-control"
              cols="10px"
              rows="5px"
              id="bio"
              name="bio"
              style={{ width: "50%" }}
              value={this.state.bio}
              onChange={this.handleChange}
            ></textarea>
            <br></br>
            <button type="submit" className="btn btn-info">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (
      !this.state.name ||
      !this.state.shortname ||
      !this.state.known ||
      !this.state.bio
    )
      alert("Please fill up all the field");
    else {
      $.ajax({
        url: "/api/person/add",
        method: "post",
        data: this.state,
        success: res => {
          alert("Person Added");
          let name = "";
          let shortname = "";
          let known = "";
          let bio = "";
          this.setState({ name, shortname, known, bio });
        },
        error: err => {
          if (err.status === 407) {
            alert(err.responseJSON.err);
          } else {
            console.log(err);
          }
        }
      });
    }
  };
}

export default AddPerson;
