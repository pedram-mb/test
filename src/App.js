import Header from "./layouts/header/Index";
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/home/Index";
import Posts from "./pages/post/Index";
import Users from "./pages/user/Index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
