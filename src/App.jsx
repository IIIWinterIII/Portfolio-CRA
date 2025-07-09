import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import PageAlwaysOnTop from "./components/PageAlwaysOnTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <PageAlwaysOnTop />
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
