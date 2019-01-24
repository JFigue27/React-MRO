import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is a test!!! by Jaime</h1>
        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
