import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () =>{

  const bienvenida = "bienvenido a Paper Factory SALE "


  return(
    <>
    <NavBar />
    <ItemListContainer greeting={bienvenida} />
    </>
  )
}

export default App;
