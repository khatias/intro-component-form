
import { useState } from 'react'
import './App.css'

function App() {
    const [useForm, setUseForm] =useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""    
    })

    const [useErrorForm, setUseErrorForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""  
    })

  const inputHandler =(e) =>{
    const {value, name} =e.target
    setUseForm({
      ...useForm,
      [name]: value,
    })
  }
  const errors={};
  const emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/;

  const errorHander =() =>{
    if (useForm.firstName.trim() === ""){
      errors.firstName = "First Name cannot be empty"
    }
    if (useForm.lastName.trim() === ""){
      errors.lastName = "Last Name cannot be empty"
    }
    if (!emailRegex.test(useForm.email)){
      errors.email ="Looks like this is not an email"
    }
    if (useForm.password.trim() === ""){
      errors.password = "password cannot be empty"
    }
    setUseErrorForm(errors)
    console.log(useErrorForm)
  }
  const submitHandler =(e) =>{
    e.preventDefault()
    errorHander()
  }
  return (
    <div className='body-container'>
      <div className='descrption'>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div>
        <button className='try-button'> Try it free 7 days 
        <span className='try-button-subtext'> then $20/mo. thereafter</span>
        </button>
        <form onSubmit={submitHandler}>
          {/* <input onChange={inputHandler} name='firstName' type="text" placeholder='First Name' />
          {useErrorForm.firstName && <span className='error'>{useErrorForm.firstName}</span>} */}

    <input 
        onChange={inputHandler} 
        name='firstName' 
        type="text" 
        placeholder={useErrorForm.firstName ? '' : 'First Name'}
        className={useErrorForm.firstName ? 'input-error' : ''}
    />
    {useErrorForm.firstName && (
        <span className='error-message'>{useErrorForm.firstName}</span>
    )}

      <input 
      onChange={inputHandler} 
      name='lastName' 
      type="text" 
      placeholder={useErrorForm.lastName ? '' : 'Last Name'}
      className={useErrorForm.lastName ? 'input-error' : ''}
       />
      {useErrorForm.lastName && (
      <span className='error-message'>{useErrorForm.lastName}</span>
      )}

      <input onChange={inputHandler}
       name='email'
        type="email"
        placeholder={useErrorForm.email ? 'email@example.com' : 'Email'}
         className={useErrorForm.lastName ? 'input-error' : ''}
         />
        {useErrorForm.email && 
        (<span className="error-message">{useErrorForm.email}</span>)}

          <input onChange={inputHandler} 
          name='password' 
          type="password"
          placeholder={useErrorForm.password ? '' : 'Password'}
          className={useErrorForm.password ? 'input-error' : ''}
           />
          {useErrorForm.password &&
          (<span className='error-message'>{useErrorForm.password}</span>
          )}
          
          <button className='claim-button' type='submit'>CLAIM YOUR FREE TRIAL</button>
          <span className='terms-and-services'>By clicking the button, you are agreeing to our <span className='terms-subtext'> Terms and Services</span></span>
        </form>
      </div>
    </div>
  )
}

export default App
