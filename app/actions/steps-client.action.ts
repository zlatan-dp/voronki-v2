"use client";

import { StepDataType } from "@/app/actions/actions.types";
import { stepsAction } from "@/app/actions/steps.action";

export const nextStep = async (stepData: StepDataType) => {
  const storedSteps = localStorage.getItem("ChatMindQuizData");
  let steps;
  if (storedSteps) steps = JSON.parse(storedSteps);
  else steps = { data: [] };

  steps.data.push(stepData);
  localStorage.setItem("ChatMindQuizData", JSON.stringify(steps));

  const sendDataToServer = await stepsAction(steps.data);

  if (!sendDataToServer) console.log("Step data not sent to DB");
};
