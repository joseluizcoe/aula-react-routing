import React, {Component} from 'react';
import queryString from 'query-string';
class Home  extends Component {

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log(values.place); // "Barcelona"
    console.log(values.destType); // "hotel"
  }

  render() {
    return (
      <div>
        <div>
          <h3>Welcome to my portfolio page! My name is</h3>
          <h1>Ana</h1>
          <p>and I'm Web Developer!</p>
        </div>
      </div>
    )

  }
}

export default Home;
