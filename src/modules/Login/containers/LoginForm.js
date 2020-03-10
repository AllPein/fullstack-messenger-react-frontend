import { withFormik } from 'formik';
import { userActions } from '../../../redux/actions';

import Login from '../components/Login'

import store from '../../../redux/store';


const LoginForm = withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    validate: values => {
        const errors = {};

        if (!values.email || !values.password) {
         errors.name = 'Required';
        }

        return errors;
    },
    handleSubmit:  (values, { setSubmitting, props }) => {
       setSubmitting(true);
        try {
            let status =  store.dispatch(userActions.authUser(values));
            
            if (status == 'success') props.history.push("/");

            setSubmitting(false);
        }
        catch(err) {
            setSubmitting(false);
        }
    },
    displayName: 'LoginForm'
})(Login);

export default LoginForm;