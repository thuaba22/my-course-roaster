import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <h1 className="text-[#1C1B1B]  text-[32px] font-bold text-center mt-12 mb-4">
        Course Registration
      </h1>
      <main className="flex max-w-[1180px] mx-auto mb-[80px]">
        <Cards></Cards>
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
