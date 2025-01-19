"use server"

import {StepDataType} from "@/app/actions/actions.types";
import {sendFunnelData} from "@/app/services/funnels.service";


export const stepsAction = async (sessionId: string, data: StepDataType): Promise<string> => {

  console.log('Steps Action')
  console.log({data})

  console.time('setFunnelData')
  const id = await sendFunnelData(sessionId, [data]);
  console.timeEnd('setFunnelData')

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