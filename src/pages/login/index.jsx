import { useEffect } from "react";
import AuthForm from "../../components/AuthForm";
import AuthFormContentWrapper from "../../components/AuthFormContentWrapper";
import AuthHeader from "../../components/AuthHeader";
import { Button, GoogleLogin } from "../../components/Button";
import { FormInput, InputPassword } from "../../components/FormInput";
import Navigation from "../../components/NavigationBar";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
            document.title = "Login | videobelajar"
        })
    return(
        <>
            <Navigation/>
            <AuthForm>
                <AuthHeader
                    title="Login to Account"
                    subtitle="Let's continue your shopping at Alvito."
                />

                <AuthFormContentWrapper
                    inputs={[
                        <FormInput id="login-email-input" label="E-Mail" name="email" required type="text"  />,
                        <InputPassword id="password-input" label="Password" name="password" required type="password"  />

                    ]}
                    buttons={[
                        <Button text="Login" onclick={() => navigate('/')} />,
                        <Button text="Register" onclick={() => navigate('/register')}/>,
                        <GoogleLogin/>  
                    ]}
                />

            </AuthForm>
            
            
        </>
    )
}

export default Login;