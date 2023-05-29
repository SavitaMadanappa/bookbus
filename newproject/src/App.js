
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './comp/Signup';
import Login from './comp/Login';
import Home from './comp/Home';
import Profile from './comp/Profile';
import Protect from './comp/Protect';
import Bookbus from './comp/Bookbus';
import Busdetails from './comp/Busdetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={ <Protect Child={Home}/>  }/>
            <Route path='/profile' element={ <Protect Child={Profile}/>  }/>
            <Route path='/bus' element={<Protect Child={Bookbus}/>}/>
            <Route path='/busdetail/:busid' element={<Protect Child={Busdetails}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;