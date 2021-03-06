import React, { FC } from "react";
import PageWrapper from "../Common/Wrappers/PageWrapper";
import AuthForm from "./AuthForm";

const AuthPage: FC = () => {
  return (
    <PageWrapper>
      <AuthForm />
    </PageWrapper>
  );
};

export default AuthPage;
