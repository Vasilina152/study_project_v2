import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import CustomCounter from "../Counter";
import style from "./MainPage.module.scss";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.main_page_wrapper}>
        <Header />
        <CustomCounter title="Apple" limit={9} />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
