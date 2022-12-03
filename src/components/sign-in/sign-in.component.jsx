import { useState } from "react"
import {  createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase.utils";

import FormInput from '../form-input/form-input.component'; 
import Button from "../button/button.component";
import './sign-in.styles.scss'


const defaultFormField={
    email:'',
    password:'',
  
}


 

const SignIn=()=>{
const [formFields, setFormFields]=useState(defaultFormField);
const { email, password}=formFields;


const signInWithGoogle=async()=>{
        await signInWithGooglePopup();
     
    };


const resetFormFields=()=>{setFormFields(defaultFormField)}

const handleSubmit=async(event)=>{
    event.preventDefault();
 
try{ const {user}=await signInAuthUserWithEmailAndPassword (email, password)

resetFormFields();
    } catch(error){
        switch (error.code) {
            case 'auth/wrong-password':
                 alert(`Incorrect password for email`)
                break;
          case 'auth/user-not-found':
                 alert(`no user associated with this email`)
                break;
            default:
                console.log(error);
        }
       
    }}



const handleChange=(event)=>{
    const {name, value}=event.target;
    setFormFields({...formFields, [name]:value} )
}

    return (<div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={()=>{}}>
            
           
            <FormInput label='Email' type='email' required name='email' onChange={handleChange} value={email}></FormInput>
           
            <FormInput label='Password' type='password' required name='password' onChange={handleChange} value={password}></FormInput>
            <div className="buttons-container">
            <Button type="submit" onClick={handleSubmit}>Sign In</Button>
             <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
</div>
        </form>
    </div>)
}
export default SignIn