import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import Navigation from "../src/routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./components/shop/shop.component";
import Checkout from "./components/checkout/checkout-container.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
