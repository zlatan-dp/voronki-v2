import exp from "constants";
import { cookies } from "next/headers";

export const getJWTToken = async (): Promise<string> => {
  const backendUrl: string | undefined = process.env.BACKEND_URL
  const login: string | undefined = process.env.BACKEND_LOGIN
  const password: string | undefined = process.env.BACKEND_PASSWORD

  if (!backendUrl) throw new Error('BACKEND_URL is required')
  if (!login) throw new Error('BACKEND_LOGIN is required')
  if (!password) throw new Error('BACKEND_PASSWORD is required')

  console.log('Starting to get JWT token')

  const response = await fetch(`${backendUrl}/login_check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // mode: 'cors',
    body: JSON.stringify({
      email: login,
      password: password,
    })
  })

  if (!response.ok) {
    throw new Error(`${response.statusText}`)
    // console.log(response.body)
  }

  const token = await response.json()

  if (!token?.token) throw new Error('unable to get JWT token')

  const cookieStore = await cookies()
  cookieStore.set('funnelTkn', token.token, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  })

  // console.log(token)
  return token
}


export const getTokenFromCookie = async (): Promise<string> => {
  const cookieStore = await cookies()
  const token = cookieStore.get('funnelTkn')?.value
  if (!token) {
    console.warn('there is no JWT token in cookie')
    const newToken = await getJWTToken()
    if (!newToken) throw new Error('unable to get token from cookie')
    return newToken
  }
  return token
}

export const getSessionIdFromCookie = async (): Promise<string> => {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('sessionId')?.value
  if (!sessionId) {
    console.warn('there is no Session ID in cookie')
    return ''
  }
  return sessionId
}

export const setSessionIdToCookie = async (sessionId: string): Promise<void> => {
  const cookieStore = await cookies()
  cookieStore.set('sessionId', sessionId, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: 60 * 60 * 24,
  })
}


// export const checkToken = async (): Promise<boolean> => {
//
// }


