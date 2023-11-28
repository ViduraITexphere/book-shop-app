import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <Hero />
      <Sidebar />
      <Products />
    </div>
  );
}

export default App;
