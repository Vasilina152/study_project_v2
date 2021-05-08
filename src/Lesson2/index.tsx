import React from "react";
import CardListItem from "./CardListItem";
import style from "./CardList.module.scss";
// import "./style.css";

class CardList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1 style={{ color: "red" }}> Это мой первый компонент</h1>
        <div className={style.block}>
          Это тело компонента
          <CardListItem title="Я первый пропс" />
        </div>
      </>
    );
  }
}

export default CardList;
