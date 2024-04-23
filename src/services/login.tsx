import { api } from "./api"

interface ILoginData {
  token: string,
  loggedIn: boolean
}

export const login = async(email: string, password: string): Promise<ILoginData> => {

  try {
    const response = await api.post('/login', {
      "email": email,
      "password": password
    })
    
    return {
      token: response.data.token,
      loggedIn: true
    }
  } catch (error) {
    return {
      token: '',
      loggedIn: false
    }
  }
}
