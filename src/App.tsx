import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./MainRoutes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
