"use client";
import AddCompanySidebar from "@/components/addCompanyPage/addCompanySidebar";
import CalledPagesPageOnePages from "@/components/calledPages/pageOne/pages";
import CalledPagesPageThreePages from "@/components/calledPages/pageThree/pages";
import CalledPagesPageTwoPages from "@/components/calledPages/pageTwo/pages";
import { useState } from "react";

interface stepObject {
  step: Number;
}

const togglePages = (step: number) => {
  switch (step) {
    case 1:
      return <CalledPagesPageOnePages />;
    case 2:
      return <CalledPagesPageTwoPages />;
    case 3:
      return <CalledPagesPageThreePages />;
    default:
      return <CalledPagesPageOnePages />;
  }
};
const Dashboard = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex w-full">
      <div className="hidden md:flex w-[32%]">
        <AddCompanySidebar step={step} setStep={setStep} />
      </div>
      <div className="w-[64%]">{togglePages(step)}</div>
    </div>
  );
};

export default Dashboard;
