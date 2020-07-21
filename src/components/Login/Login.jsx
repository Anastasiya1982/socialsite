import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormControls/FormControls.module.css';


const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember
            </div>
            {captchaUrl && <img src={captchaUrl}/> }
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"}
                                             component={Input}
                                             validate={[requiredField]} />
            }

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}
                        captchaUrl={props.captchaUrl}
        />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})
export default connect(mapStateToProps, {login})(Login);