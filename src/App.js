import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Containers/ItemCount/ItemCount";

const App = () =>{

  const bienvenida = "bienvenido a Paper Factory SALE "

  const onAdd =(contador)=>{
    
  }
  onAdd()

  return(
    <>
    <NavBar />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
    {/* <ItemListContainer greeting={bienvenida} /> */}
    </>
  )
}

export default App;
