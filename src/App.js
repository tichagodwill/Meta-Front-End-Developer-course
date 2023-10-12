import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";
import theme from "./theme/theme.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AlertProvider>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/Home" replace={true} />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<Home />} />
            <Route path="/Menu" element={<Home />} />
            <Route path="/Reservations" element={<BookingPage />} />
            <Route path="/Order" element={<Home />} />
            <Route path="/Login" element={<Home />} />
          </Routes>
          <Footer />
          <Alert />
        </AlertProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
