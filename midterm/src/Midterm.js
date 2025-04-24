import React from "react";

export default class Midterm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  changeText = () => {
    this.setState({
      text: "사과",
    });
  }

  changeText2 = () => {
    this.setState({
      text: "오렌지",
    });
  }

  changeText3 = () => {
    this.setState({
      text: "바나나",
    });
  }

  render() {
    return (
      <div>
        <h1>당신은 어떤 과일을 좋아하나요? {this.state.text}</h1>
        <button onClick={this.changeText}>사과</button>
        <button onClick={this.changeText2}>오랜지</button>
        <button onClick={this.changeText3}>바나나</button>
      </div>
    );
  }
}