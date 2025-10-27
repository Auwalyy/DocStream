import React, { useState} from 'react'

const Login = () => {


    const [input, setInput] = useState("");
    const [staffNo, setStaffNo] = useState(""); 
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <form>
            <h2>Login</h2>
            <h3>Add your staff id to login</h3>
            <div>
                <input 
                type="text" 
                name='staffNo' 
                placeholder='Staff No.' 
                required 
                value={staffNo}
                onChange={(e) => setStaffNo(e.target.value)}
                 />
                 <input 
                 type='text'
                 name='department'
                 value={department}
                 placeholder='Department'
                 required
                 onChange={(e) => setDepartment(e.target.value)}
                 />
                 <input 
                 type='text'
                 name='designation' 
                    value={designation} 
                    placeholder='Designation'
                    required
                    onChange={(e) => setDesignation(e.target.value)}
                 />
                 <input 
                 type='password' 
                 name='password' 
                 value={password} 
                 placeholder='Password'
                 required
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 <button type='submit'>Login</button>
                 <p>forgot password?</p>
            </div>
        </form>
    </div>
  )
}

export default Login