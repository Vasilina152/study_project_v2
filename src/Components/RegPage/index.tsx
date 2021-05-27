import React, { FC } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import RegForm from "./RegForm";
import style from "./RegPage.module.scss";

const RegPage: FC = () => {
  return (
    <div className={style.reg_page_wrapper}>
      <Header />
      <RegForm />
      <Footer />
    </div>
  );
};

export default RegPage;
