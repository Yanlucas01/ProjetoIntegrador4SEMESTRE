import React from "react";
import Description from "../../components/Description";
import TopBar from "../../components/TopBar";
import TopBanner from "../../components/TopBanner";
import MidBanner from "../../components/MidBanner";
import BottomCards from "../../components/BottomCards";
import BottomReviews from "../../components/BottomReviews";
import SiteInfo from "../../components/SiteInfo";

export default function Home() {
  return (
    <>
      <TopBar />
      <TopBanner />
      <Description />
      <MidBanner />
      <BottomCards />
      <BottomReviews />
      <SiteInfo />
    </>
  );
}
