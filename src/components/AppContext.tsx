import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"


interface IUserData{
  userId: string,
  name: string,
  email: string
}


interface IAppContext {
  userData: IUserData,
  setUserData: (userData: IUserData) => void
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
  token: string,
  setToken: (token: string) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const [ token, setToken ] = useState<string>('')
  const [ userData, setUserData ] = useState<IUserData>({} as IUserData)

  
  useEffect(() => {
    const storage = getAllLocalStorage()
    if(storage){
      const {login} = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])


  return (
    <AppContext.Provider value={{userData, setUserData, isLoggedIn, setIsLoggedIn, token, setToken}}>
      {children}
    </AppContext.Provider>
  )
}