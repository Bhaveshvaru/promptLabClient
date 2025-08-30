import { SignUp } from '@clerk/clerk-react'
import './signuppage.css'

export const SignUpPage = () => {
  return (
    <div className='signUpPage'>
      <SignUp path='/sign-up' signInUrl='/sign-in' />
    </div>
  )
}
