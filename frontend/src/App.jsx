import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "react-hot-toast";

function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <NavBar/>
      <Toaster
  position="bottom-center"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#2D3748",
      color: "#fff",
    },
  }}
/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
