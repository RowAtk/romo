import { PageContent } from "components/atoms/layout/PageContent";
import { FireAuth } from "components/organisms/auth/FireAuth";
import { FCProps } from "contracts/general-contracts";
import React from "react";

export interface AuthPageProps extends FCProps {}

export function AuthPage() {
  return (
    <div className="AuthPage">
      <PageContent className="container my-20">
        <FireAuth />
      </PageContent>
    </div>
  );
}
