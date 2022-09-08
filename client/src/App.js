import './App.css';

import Main from './views/Main';

import Createpet from './component/Createpet';

import Detail from './views/Details';
import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
        <Route exact path={"/"}>
        <Main />
        </Route>



        <Route exact path={"/pets/new"}>
        <Createpet />
        </Route>

        <Route  exact path={"/pets/:id"}>
        <Detail />
        </Route>

        <Route  exact path={"/pets/:id/edit"}>
        <Update />
        </Route>

        
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;