import React, { Component } from "react";
class DataList extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    all: [],
    match: this.props.match
  };

  //DID MOUNT FUNCTION
  componentDidMount = () => {
    fetch("/api/person")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data,
            all: result.data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    if (this.state.error) {
      return this.errorMessage();
    } else if (!this.state.isLoaded) {
      return this.loadingView();
    } else if (!this.state.items) {
      return this.noDataView();
    } else {
      return this.listData();
    }
  }

  listData = () => {
    return (
      <div>
        <label htmlFor="search">Search..</label>
        <input
          className="form-control"
          id="search"
          placeholder="Enter any field value to search...."
          onKeyUp={this.filtering}
        ></input>
        <br></br>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Pic</th>
              <th>Name</th>
              <th>Short Name</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {this.state.items.map(item => (
              <tr key={item.u_id} onClick={() => this.changeUrl(item.u_id)}>
                <td>
                  <img
                    src={this.imgLink(item.t_pic)}
                    width="64"
                    alt={item.shortname}
                  ></img>
                </td>
                <td>{item.name}</td>
                <td>{item.shortname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  errorMessage = () => {
    return <div style={{ textAlign: "center" }}>{this.state.error}</div>;
  };

  loadingView = () => {
    return <div style={{ textAlign: "center" }}>loading....</div>;
  };

  noDataView = () => {
    return <div style={{ textAlign: "center" }}> No Person Added... :(</div>;
  };

  imgLink = imgName => {
    // const result = await fetch("/api/img/" + imgName);
    // if (result) {
    //   console.log(result);
    //   return result.url;
    // }
    return "/media/img/" + imgName;
  };

  filtering = e => {
    const val = e.target.value.trim().toLowerCase();

    const data = this.state.all.filter(item => {
      if (item.name.toLowerCase().search(val) !== -1) {
        return true;
      } else if (item.shortname.toLowerCase().search(val) !== -1) {
        return true;
      }
      return false;
    });
    this.setState({ items: data });
  };

  changeUrl = id => {
    this.props.history.push("/profile/" + id);
  };
}

export default DataList;
