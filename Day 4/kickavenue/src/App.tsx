/** @format */

import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import { CardList } from "./components/card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="mx-[24px]">
        <Carousel />
        <CardList />
      </div>
    </>
  );
}

export default App;
