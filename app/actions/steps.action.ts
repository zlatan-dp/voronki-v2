"use server"

import {StepDataType} from "@/app/actions/actions.types";
import {sendFunnelData} from "@/app/services/funnels.service";
import {clearCookies} from "@/app/services/authorization";


// export const nextStep = async (stepData: StepDataType) => {
//
// }


export const stepsAction = async (data: StepDataType[]): Promise<string> => {

  console.log('Steps Action')
  console.log({data})

  const id = await sendFunnelData(data);

  if (!id) {
    throw new Error(`SessionId not received`)
  }

  console.log({id})

  return String(id)
}

export const stepsFormAction = async (formData: FormData): Promise<void> => {
  console.log('Steps Action')
  console.log({formData})
}

export const deleteSessionId = async (): Promise<void> => {
  await clearCookies()
}

export const getCurrentTime = async () => {
  const now = new Date();
  return now.toISOString().slice(0, 16).replace("T", " ");
}