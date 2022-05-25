import {useState} from 'react';
function Forms() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(`send ${name} and ${age} to backend`)
        setName('');
        setAge('')
    }

    return(
        <div className='form-group'>
            <form onSubmit={handleSubmit}>
                <h1>Simple Form</h1>
                <div>
                    <label>Enter Username
                        <input type='text' name='uname' autoComplete='off' className='form-control'
                        onChange={(evt) => {setName(evt.target.value);}} value={name}></input>
                    </label>
                </div>
                <div>
                    <label>Enter Age
                        <input type='text' name='age' autoComplete='off' className='form-control'
                        onChange={(evt) => {setAge(evt.target.value);}} value={age}></input>
                    </label>
                </div>
                <div>
                    <button className='btn btn-dark'>Login</button>
                </div>
                <div>
                    Hello {name}! Your age is {age}.
                </div>
            </form>
        </div>
    )
}
export default Forms;