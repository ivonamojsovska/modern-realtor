"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@mui/material";
import RealtorForm from "@/components/RealtorForm";
import Report from "@/components/Report";

const Home = () => {
  const [taskNumber, setTaskNumber] = useState();
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex gap-5 mt-5">
        <Button onClick={()=>setTaskNumber(1)} className="bg-[--color-primary] text-white">Task 1</Button>
        <Button onClick={()=>setTaskNumber(2)} className="bg-[--color-primary] text-white">Task 2</Button>
        <Button onClick={()=>setTaskNumber(3)} className="bg-[--color-primary] text-white">Task 3</Button>
      </div>
      <div>
        {taskNumber === 1 && (
          <RealtorForm />
        )}
        {taskNumber === 2 && (
          <Report />
        )}
      </div>
    </>
  );
};

export default Home;
