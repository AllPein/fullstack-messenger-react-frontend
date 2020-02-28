import { withFormik } from 'formik';
import { userActions } from '../../../redux/actions';

import Register from '../components/Register'

import store from '../../../redux/store';


const RegisterForm = withFormik({
    mapPropsToValues: () => ({ email: '', username: '', password: '' }),

    validate: values => {
        const errors = {};

        if (!values.email || !values.password) {
         errors.name = 'Required';
        }

        return errors;
    },
    handleSubmit: async (values, { setSubmitting, props }) => {
       setSubmitting(true);
        try {
            let status = await store.dispatch(userActions.registerUser(values));
            
            if (status == 'success') props.history.push("/");

            setSubmitting(false);
        }
        catch(err) {
            setSubmitting(false);
        }
    },
    displayName: 'RegisterForm'
})(Register);

export default RegisterForm;