import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SignIn
        path='/sign-in'
        signUpUrl='/sign-up'
        forceRedirectUrl='/dashboard'
      />
    </div>
  )
}

export default SignInPage
