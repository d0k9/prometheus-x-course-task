import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import SignIn from "./pages/SignIn";
import CartPage from "./pages/CartPage";
import SpecificBook from "./pages/SpecificBook";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route path="cart" element={<CartPage />} />
          <Route path="booklist" element={<BookList />} />
          <Route path="specific_book" element={<SpecificBook />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);