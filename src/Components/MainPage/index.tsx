import React from "react";
import CustomCounter from "../Counter";
import PageWrapper from "../Common/Wrappers/PageWrapper";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <CustomCounter title="Apple" limit={9} />
      </PageWrapper>
    );
  }
}

export default MainPage;
