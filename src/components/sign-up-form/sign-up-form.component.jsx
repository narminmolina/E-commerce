import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from '../form-input/form-input.component'; 

import './sign-up-form.styles.scss'

import Button from "../button/button.component";

const defaultFormField={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


 

const SignUpForm=()=>{
const [formFields, setFormFields]=useState(defaultFormField);
const {displayName, email, password, confirmPassword}=formFields;

console.log(formFields);

const resetFormFields=()=>{setFormFields(defaultFormField)}

const handleSubmit=async(event)=>{
    event.preventDefault();
    if (password!==confirmPassword) {
    alert(`password doesn't match`); 
    return;
}
try{ const {user}= await createAuthUserWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth (user, {displayName})
    resetFormFields();
    } catch(error){
        if (error.code==='auth/email-already-in-use'){ alert(`Can't create user ], email is already in uses`)}
        console.log( 'user creation encountered an error', error);}
    }



const handleChange=(event)=>{
    const {name, value}=event.target;
    setFormFields({...formFields, [name]:value} )
}

    return (<div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={()=>{}}>
            
            <FormInput label='Display Name' type='text' required name='displayName' onChange={handleChange} value={displayName}></FormInput>
           
            <FormInput label='Email' type='email' required name='email' onChange={handleChange} value={email}></FormInput>
           
            <FormInput label='Password' type='password' required name='password' onChange={handleChange} value={password}></FormInput>
            
            <FormInput label='Confirm Password' type='password' required name='confirmPassword' onChange={handleChange} value={confirmPassword}></FormInput>
            <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        </form>
    </div>)
}
export default SignUpForm