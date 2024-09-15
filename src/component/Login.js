import React from 'react'

const Login = () => {

const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await fetch("https://localhost:8080/api/auth/login",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
const json = await response.json()
    console.log(json)

}

  return (
    <div className=' conatiner my-2'>
      <form onSubmit={handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="email" >Email address</label>
    <input type="email" className="form-control" id="email1" name='email' aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password1" className='form-label'>Password</label>
    <input type="password" className="form-control" name='password' id="password1" />
  </div>

  <button type="submit" className="btn btn-primary my-2" >Submit</button>
</form>
    </div>
  )
}
export default Login
