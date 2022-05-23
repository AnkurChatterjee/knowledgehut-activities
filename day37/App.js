import logo from "./logo.svg";
import "./App.css";

function App() {
  let users = [
    {name: 'Leonardo Dicaprio', gender: 'Male', age: 65},
    {name: 'Johnny Depp', gender: 'Male', age: 63},
    {name: 'Morgan Freeman', gender: 'Male', age: 77},
    {name: 'Margot Robbie', gender: 'Female', age: 36}
  ]
  return(
    <div>
      <h1>List of Hollywood actors</h1> <hr/>
      <table className='table'>
        <thead>
          <tr className='table-primary'>
            <th>S.No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Remove Button</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((elem,index) => 
              <tr key={index} className  = 'table-secondary'>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td>{elem.gender}</td>
                <td>{elem.age}</td>
                <td><button className='btn btn-danger'>Remove</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
