import React, { useEffect } from 'react'
import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import { FormInput, InputPassword, InputDropdown, InputNoHP } from "../../components/FormInput";
import Navigation from "../../components/NavigationBar";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
          document.title = "Register | videobelajar"
      })
  return (
    <>
      <Navigation/>
      <AuthForm>
                <AuthHeader
                    title="Account Registration"
                    subtitle="Let's register your account now!"
                />

                <AuthFormContentWrapper
                    inputs={[
                        <FormInput id="namaLengkap-input" label="Full Name" name="namalengkap" required type="text"  />,
                        <FormInput id="register-email-input" label="E-Mail" name="email" required type="text"  />,
                        <InputDropdown id="kelamin-input" label="Gender" name="jeniskelamin" required type="text"  />,
                        <InputNoHP/>,
                        <InputPassword id="kataSandi-input" label="Password" name="katasandi" required type="password"  />,
                        <InputPassword id="konfirmasiKataSandi-input" label="Password Confirmation" name="konfirmasikatasandi" required type="password"  />

                    ]}
                    buttons={[
                        <Button text="Register" onclick={() => navigate('/')}/>,
                        <Button text="Login" onclick={() => navigate('/login')}/>,
                        <GoogleLogin/>  
                    ]}
                />

            </AuthForm>
    </>
  )
}

export default Register
