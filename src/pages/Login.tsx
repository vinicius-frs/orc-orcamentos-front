import { Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";
import { jwtDecode } from "jwt-decode";

const Login = () =>{
  const [ email, setEmail] = useState<string>('')
  const [ password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const { setToken, setIsLoggedIn } = useContext(AppContext)

  const validateUser = async (email: string, password: string) => {
    const {token, loggedIn} = await login(email, password)

    if(!loggedIn){
      alert('Email ou senha incorretos!')
      return
    }

    if(token){
      setToken(token)
      setIsLoggedIn(true)
      changeLocalStorage({login: true})
      const tokenData = jwtDecode(token);
      navigate(`/user/${tokenData.sub}`)
    }

  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      validateUser(email, password)
    }
  }
  
  return (
    <Card>
      <Center>Faça o login</Center>
      <Input placeholder="Email" onKeyDown={handleKeyDown} marginTop='5px' type='email' value={email} onChange={(event) => {setEmail(event.target.value)}} />
      <Input placeholder="Senha" onKeyDown={handleKeyDown} marginTop='5px' type='password' value={password} onChange={(event) => {setPassword(event.target.value)}} />
      <Center>
        <CustomButton event={() => validateUser(email, password)}></CustomButton>
      </Center>
    </Card>
  )
}

export default Login;