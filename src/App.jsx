import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Quiz from "./pages/Quiz";
import Notice from "./pages/Notice";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import BottomFooter from "./components/BottomFooter";
import StoreContextProvider from "./store/Store";
import StudyDetail from "./pages/StudyDetail";
function App() {
  return (
    <StoreContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/study_detail/:id" element={<StudyDetail />} />
        </Routes>
        <BackToTop />
        <Footer />
        <BottomFooter />
      </Router>
    </StoreContextProvider>
  );
}

export default App;
