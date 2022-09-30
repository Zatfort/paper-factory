import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer"
import ItemCount from "./Containers/ItemCount/ItemCount";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import { BrowserRouter,Routes,Route, } from "react-router-dom";

const App = () =>{
  const onAdd =(contador)=>{
    
  }
  onAdd()

  return(
    <>
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<ItemListContainer/>}  />
      <Route path="/categories/:IdCategories" element={<ItemListContainer/>} />
      <Route path="/product/:id" element={<ItemDetailContainer/>} />
      <Route path="/cart"/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;


{/* <ItemCount stock={5} initial={1} onAdd={onAdd} />
     
      */}
