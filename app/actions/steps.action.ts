"use server"

export const stepsAction = async (formData: FormData): Promise<void> => {
  console.log('Steps Action')
  console.log({formData})
}