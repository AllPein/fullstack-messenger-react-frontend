import React from 'react'
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Login = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <div>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Item
            hasFeedback
          >
            <Input
              id="email"
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            <Input
              id="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="primary"
              className='button'
              size="large"
            >
              Войти
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </div>
    </div>
  )
}
 
export default Login;
 