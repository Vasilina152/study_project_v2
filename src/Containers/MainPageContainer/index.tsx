import React from "react";
import MainPage from "../../Components/MainPage";

class MainPageContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    // console.log("MainPageContainer init");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount MainPageContainer");
  // }

  // componentDidMount() {
  //   console.log("MainPageContainer mount");
  // }

  render() {
    // console.log("render");
    return (
      <>
        <MainPage />
      </>
    );
  }
}

export default MainPageContainer;
