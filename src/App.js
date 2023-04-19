import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Brief from './Components/Checkout/Checkout'

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path={'/'} exact element={<ItemListContainer />} />
                    <Route path={'/category/:id'} exact element={<ItemListContainer />} />
                    <Route path={'/producto/:id'} exact element={<ItemDetail />} />
                    <Route path={'/checkout'} exact element={<Brief />} />
                    <Route path={'*'} exact element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
