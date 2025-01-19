import {StepDataType} from "@/app/actions/actions.types";
import {getJWTToken, getTokenFromCookie} from "@/app/services/authorization";


export const sendFunnelData = async (id: string, data: StepDataType[]) => {
  if (!id) {
    return await createFunnel(data)
  } else return await patchFunnel(id, data)
}


export const createFunnel = async (data: StepDataType[]): Promise<number> => {
  const token = await getTokenFromCookie()

  if (!token) throw new Error('unable to get token from cookie')

  const backendUrl: string | undefined = process.env.BACKEND_URL
  if (!backendUrl) throw new Error('unable to get BACKEND_URL')

  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'X-AUTH-TOKEN': `Grossma ${token}`,
    // 'X-Client-Token': id,
  }

  const response = await fetch(`${backendUrl}/funnels`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      data: data,
    }),
  })

  if (response.status === 401) {
    const newToken = await getJWTToken()
    if (!newToken) throw new Error('unable to get token from the server')
    await createFunnel(data)
  }
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const sessionId = await response.json()

  console.log('=========', {sessionId})

  return sessionId.id
}


export const patchFunnel = async (id: string, data: StepDataType[]): Promise<string> => {

  console.log('starting patch')

  const token = await getTokenFromCookie()

  const backendUrl: string | undefined = process.env.BACKEND_URL
  if (!backendUrl) throw new Error('unable to get BACKEND_URL')

  const headers = {
    'Content-Type': 'application/merge-patch+json',
    'accept': 'application/json',
    'X-AUTH-TOKEN': `Grossma ${token}`,
    // 'X-Client-Token': id,
  }

  const response = await fetch(`${backendUrl}/funnels/${id}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      data: data,
    }),
  })

  if (response.status === 401) {
    const newToken = await getJWTToken()
    if (!newToken) throw new Error('unable to get token from the server')
    await patchFunnel(id, data)
  }
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const sessionId = await response.json()

  console.log('++++++++', {sessionId})

  return sessionId.id
}