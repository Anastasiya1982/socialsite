import React from "react";
import {Input, Textarea} from "../../common/FormControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import s from '../../common/FormControls/FormControls.module.css';


const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return <form className={s.profileForm}
                 onSubmit={handleSubmit}>

        <div>
            <b>FullName</b>:
            <Field placeholder={"Full name"} name={"fullName"}
                   component={Input}
                   validate={[requiredField]}/>
        </div>
        <div>
            <b> Looking for a job</b> :
            <Field placeholder={""} name={"lookingForAJob"}
                   component={Input}
                   type={"checkbox"}/>
        </div>
        <div>
            <b>My professional skills</b>:
            <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"}
                   component={Textarea}/>
        </div>
        <div><b>ABOUT ME</b>:
            <Field placeholder={"About me"} name={"aboutMe"}
                   component={Textarea}
            />
            <div>
                <b>My contacts:</b>{Object.keys(profile.contacts).map(key => {
                return <div  key={key.id}>
                    <b>{key}:</b>
                    <Field  placeholder={key} name={"contacts."+key}
                           component={Input}
                           // validate={[requiredField]}
                    />
                </div>
            })}
            </div>
        </div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>save</button>
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
export default ProfileDataFormReduxForm;