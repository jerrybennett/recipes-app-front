import React from 'react';

export default class Button extends React.Component {
  handleClick = () => {
    fetch(`http://locahost:3000/api/v1/recipes`).then(res => res.json()).then(console.log)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Fetch!</button>
      </div>
    );
  }
}
