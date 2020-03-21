import { withFormik } from 'formik';
import { userActions } from '../../../redux/actions';

import Register from '../components/Register'

import store from '../../../redux/store';


const RegisterForm = withFormik({
    mapPropsToValues: () => ({ email: '', username: '', password: '' }),
    enableReinitialize: true,
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = "Введите E-Mail";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Неверный E-Mail";
        }
        if (!values.password) {
            errors.password = "Введите пароль";
        } else if (values.password.length < 8) {
            errors.password = "Пароль должен быть не менее 8 символов";
        }
        return errors;
    },
    handleSubmit:  (values, { setSubmitting, props }) => {
       setSubmitting(true);
        try {
            let status =  store.dispatch(userActions.registerUser(values));
            
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