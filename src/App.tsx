import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { ScrollToTop } from "./components/common/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
