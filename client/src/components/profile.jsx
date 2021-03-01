import React, { Component } from "react";

class Profile extends Component {
  state = {
    person: {
      name: null,
      p_pic: null,
      shortname: null,
      known: null
    }
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    fetch("/api/person/" + id)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            person: result.data
          });
        },
        error => {
          console.log(error);
        }
      );
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <img
            src={this.getImg(this.state.person.p_pic)}
            height="150"
            style={{ borderRadius: "50%" }}
            alt={"img"}
          />
          <h1 style={{ color: "whitesmoke" }}>{this.state.person.name}</h1>
        </div>
        <br></br>
        <div className="profileData">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Short Name:</h3>
              <div className="profileInfo">{this.state.person.shortname}</div>
            </li>

            <li className="list-group-item">
              <h3>Re Known:</h3>
              <div className="profileInfo">{this.state.person.reknown}</div>
            </li>

            <li className="list-group-item">
              <h3>Bio:</h3>
              <div className="profileInfo">{this.state.person.bio}</div>
            </li>
          </ul>
        </div>
        <br></br>
      </div>
    );
  }

  getImg = imgName => {
    return "/media/img/" + imgName;
  };
}

export default Profile;
