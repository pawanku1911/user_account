import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { Toastify } from '../../services/toastify/Popup';
import { useDispatch } from 'react-redux';
import {signIn} from '../../store/authSlice/authSlice'

const Login = () => {
 const navigate=useNavigate();
const dispatch= useDispatch();


  const formik = useFormik({
    initialValues: {
      password: '', email: ''
    },
    validationSchema: Yup.object({
      password: Yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),


    onSubmit: values => {
     dispatch(signIn(values)).unwrap().then((response)=>{
      // console.log("res",response);
      if(response.success===true){
        navigate("/home")
        localStorage.setItem("token",response.token)
      }
     })
  
    },
  });


  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={formik.handleSubmit}>
                     
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                     <form>

                      <div className="form-outline mb-4"   >
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name='email'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div  className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      </form>


                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="typepasswordX"
                          className="form-control"
                          name='password'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}

                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div  className='text-danger' >{formik.errors.password}</div>
                          ) : null}


                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                      
                      </div>


                      {/* <button > */}
                      <NavLink className="small text-muted m" to="/forgetpassword">
                        Forgot password?
                      </NavLink>
                      {/* </button > */}

                      <p className="mb-5 pb-lg-2 mt-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <NavLink to="/register" style={{ color: "#393f81" }}>
                          <u>Register here</u>
                        </NavLink>


                      </p>
                     
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  </Formik>
  )
}

export default Login
