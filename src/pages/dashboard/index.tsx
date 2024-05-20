import { useRedux } from "@/hooks/useRedux";
import Sidebar from "@/layout/Sidebar";
import { TABS, TabOption } from "@/redux/layout/interface";
import classNames from "classnames";
import Analytics from "./Analytics";
import { PropsWithChildren } from "react";
import Holiday from "./Holiday";
import Jobs from "./Jobs";
import Blog from "./Blog";
import styled from "styled-components";

interface PageContainerProps extends PropsWithChildren {
  tab: TabOption;
}

const PageContainer = ({ tab, children }: PageContainerProps) => {
  const { useStateSelector } = useRedux();

  const { activeTab } = useStateSelector((state) => state.Layout);

  return (
    <div
      className={classNames("w-full h-full", {
        "order-7": activeTab !== tab,
        "order-1": activeTab === tab,
      })}
    >
      <BodyDiv
        className={classNames("flex flex-col relative  px-4 md:px-8 py-4", {
          hidden: activeTab !== tab,
        })}
      >
        {children}
      </BodyDiv>
    </div>
  );
};

const index = () => {
  const { useStateSelector } = useRedux();

  return (
    <div className="w-full h-full order-5 md:order-10 flex flex-col">
      {/* <Sidebar /> */}
      <PageContainer tab={TABS.ANALYTICS}>
        <Analytics />
      </PageContainer>
      <PageContainer tab={TABS.HOLIDAY}>
        <Holiday />
      </PageContainer>
      <PageContainer tab={TABS.JOBS}>
        <Jobs />
      </PageContainer>
      <PageContainer tab={TABS.BLOG}>
        <Blog />
      </PageContainer>
    </div>
  );
};

const BodyDiv = styled.div`
  height: 100dvh;

  @media screen and (max-width: 768px) {
    height: calc(100dvh - 70px);
  }
`;

export default index;
