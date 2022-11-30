import { BrowserRouter, Routes, Route } from "react-router-dom";

import ArticlePage from "../pages/Articles/ArticleTemplate";
import HomePage from "../pages/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
