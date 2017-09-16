import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "white"
    };
  }
  handleClick = () => {
    this.state.bgColor === "white"
      ? this.setState({ bgColor: "gray" })
      : this.setState({ bgColor: "white" });
  };
  render() {
    let squareColor = this.state.bgColor;
    let cssClasses = `${squareColor} square`;
    return <div className={cssClasses} onClick={this.handleClick} />;
  }
}

export default Square;
