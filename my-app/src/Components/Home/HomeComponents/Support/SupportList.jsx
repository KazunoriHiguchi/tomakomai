import React from "react";
import Medical from "../../../../images/hospital.jpg";
import Raising from "../../../../images/raising.jpg";
import Education from "../../../../images/education.jpg";
import Emergency from "../../../../images/emergency.jpg";
import Job from "../../../../images/job.jpg";
import Transportation from "../../../../images/transportation.jpg";
import Tax from "../../../../images/tax.jpg";
import DailyLife from "../../../../images/daily-life.jpg";
import SupportCell from "./SupportCell";

export default function SupportList() {
  return (
    <div className="bg-gray-100 pt-12">
      <h2 className="flex justify-center text-xl mb-4">INFORMATION</h2>
      <h3 className="flex justify-center">あなたの暮らしをより快適に</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-12 py-8">
        <SupportCell to={"/tomakomai/medical"} img={Medical} type={"医療"} />
        <SupportCell to={"/tomakomai/raising"} img={Raising} type={"出産・子育て"} />
        <SupportCell to={"/tomakomai/education"} img={Education} type={"教育"} />
        <SupportCell to={"/tomakomai/emergency"} img={Emergency} type={"緊急"} />
        <SupportCell to={"/tomakomai/job"} img={Job} type={"就労"} />
        <SupportCell to={"/tomakomai/transportation"} img={Transportation} type={"交通"} />
        <SupportCell to={"/tomakomai/tax"} img={Tax} type={"税金"} />
        <SupportCell to={"/tomakomai/daiylife"} img={DailyLife} type={"日常生活"} />
      </div>
    </div>
  );
}
