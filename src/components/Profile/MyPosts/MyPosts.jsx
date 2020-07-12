import React, { PureComponent} from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";

let  maxLength10= maxLengthCreator(10);

const  MyPosts =React.memo((props) => {
        let postsElement =
            [...props.posts]
                .reverse()
                .map(p => (<Post massage={p.message} like={p.like}/>));

        let onAddPost = (values) => {
            props.addPost(values.newMyPostText);
        }

        return (
            <div className={s.postwrapp}>
                <h3>My posts</h3>
                <div>
                    <AddNewMyPostFormRedux onSubmit={onAddPost}/>
                    <div className={s.posts}>
                        {postsElement}
                    </div>
                </div>
            </div>
        )
    });

const AddMyPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMyPostText"}
                        validate={[ requiredField,maxLength10]}
                       placeholder={"PostMessage"}
                />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewMyPostFormRedux=reduxForm({form:"ProfileAddMyPostForm"})(AddMyPostForm);
export default MyPosts;