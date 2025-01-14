"use server"

import {StepType} from "@/app/actions/actions.enums";

export type Data = {
  step: number,
  type: StepType,
  question?: string,
  answer: string
}

export const stepsAction = async (data: Data): Promise<void> => {
  console.log('Steps Action')
  console.log({data})
}

export const stepsFormAction = async (formData: FormData): Promise<void> => {
  console.log('Steps Action')
  console.log({formData})
}