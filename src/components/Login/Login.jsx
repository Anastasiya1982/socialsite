
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"login"}
                 component={Input}
                 validate={[requiredField]}

          />
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"}
                 component={Input}
                 validate={[requiredField]}
          />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
    }
  return <div>
            <h1>LOGIN </h1>
                <LoginReduxForm onSubmit={onSubmit}/>
          </div>
}
export default Login;