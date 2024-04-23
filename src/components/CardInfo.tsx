import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent?: string,
  content?: string,
}

const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box backgroundColor='white' width='20vw' minHeight='25vh' padding={8} borderRadius={25}>
      <Text fontSize={25} fontWeight='bold'>{mainContent}</Text>
      <Text paddingTop={15}>{content}</Text>
    </Box>
  )
}

export default CardInfo;