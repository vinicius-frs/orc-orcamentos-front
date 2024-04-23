import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import CardInfo from "../components/CardInfo"
import { AppContext } from "../components/AppContext"
import { api } from "../services/api";

const Home = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { userData, token, isLoggedIn, setUserData } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
      const getData = async () => {
        const response = await api.get(`/user/${id}`, {
          headers: {
          'Authorization': `token ${token}`
          }
        })
        setUserData(response.data)
      }
      getData()
    }, [id, token, setUserData])

    const actualData = new Date()

    if(userData && id !== userData.userId) {
        navigate('/')
    }
  
    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDate()} / ${actualData.getMonth()+1} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} />
                        </>
                    )
                }
            </SimpleGrid>    
        </Center>
    )
}

export default Home
