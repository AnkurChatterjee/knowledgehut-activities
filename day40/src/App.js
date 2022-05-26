import {Link, Route, Routes} from 'react-router-dom'
import "./App.css";
import {useState} from 'react';
import axios from 'axios';
import Forms from './components/Forms';
import UserTable from './components/UserTable';

function Home(){
  return(
    <div>
      <h2>Home Component</h2>
    </div>
  )
}
function About(){
  return(
    <div>
      <h2>About Component</h2>
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h2>Contact Component</h2>
    </div>
  )
}
function Users(){
  let [users,setUsers] = useState([]);
  let [isLoaded,setIsLoaded] = useState(false);

  let handleClick = () => {
    setIsLoaded(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data)})
    .catch(error => {console.log(error)});
    console.log(users);
  }
 if(!isLoaded){
  return(
    <div>
      <h2>List of all users from fake API</h2>
      <button className='btn btn-secondary' onClick={handleClick}>Load</button>
    </div>
  )
 } else {
  return(
    <div>
      <h2>List of all users from fake API</h2>
      <button className='btn btn-secondary' onClick = {() => {
        setIsLoaded(false)
      }}>Hide</button>
     <UserTable arg = {users} />
    </div>
  )
 }
}

function App(){
  return(
    <div className='container-fluid'>
      <h1 className='text-center'>Example on SPA</h1>
      <div>
        <Link to = '/home'>Home</Link> | 
        <Link to = '/about'>About Us</Link> |
        <Link to = '/contact'>Contact Us</Link> |
        <Link to = '/forms'>Forms</Link> |
        <Link to = '/users'>Users</Link>
      </div>
      <hr />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App;

