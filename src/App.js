import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Containers/ItemCount/ItemCount";
import ItemDetailContainer from "./Containers/ItemDetailContainer";

const App = () =>{
  const onAdd =(contador)=>{
    
  }
  onAdd()

  return(
    <>
    <NavBar />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />
    <ItemListContainer/>
    <ItemDetailContainer/>
  
    </>
  )
}

export default App;
