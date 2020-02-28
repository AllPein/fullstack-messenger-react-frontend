import React from 'react'
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Register = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  return (
    <div>
    <div className="auth__top">
      <h2>Регистрация</h2>
      <p>Для входа в чат, вам нужно зарегистрироваться</p>
    </div>
    <div>
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item >
                <Input
                name="email"
                icon="mail"
                size='large'
                placeholder="E-Mail"
                onChange={handleChange}
                errors={errors}
                value={values.email}
                />
            </Form.Item >
          
            <Form.Item>
                <Input
                name="username"
                icon="user"
                size='large'
                placeholder="Логин"
                onChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                value={values.username}
                />
            </Form.Item>
          
            <Form.Item>
            <Input
            name="password"
            icon="lock"
            size='large'
            placeholder="Пароль"
            type="password"
            onChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            value={values.password}
          />
            </Form.Item>

          <Form.Item>
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              className='button'
              type="primary"
              size="large"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>

    </div>
  </div>
    
    
  )
}
 
export default Register;
 