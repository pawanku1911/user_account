import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {signUp} from "../../store/authSlice/authSlice"
import { useDispatch, useSelector } from 'react-redux';


const Register = () => {

const dispatch=useDispatch()
 const selector=useSelector((state)=>state.authSlice)



  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      Confirmpassword: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      Confirmpassword: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required')
        .oneOf([Yup.ref("password"), null], "password not match")

    }),
    onSubmit: values => {
      // console.log("values---",values);
  dispatch(signUp(values)).unwrap().then((response)=>{
    // console.log("response---",response);
     navigate("/")
  }
  )
    },
  });
  // dispatch(signUp(values)).unwrap().then((response)=>{
  //   const getEmail = JSON.parse(localStorage.getItem("user"));
  //     if(getEmail===null){
  //       const item = values
  //       const reacod = [...data,item]
  //       localStorage.setItem("user",JSON.stringify(reacod))
  //       navigate("/")
  //     }else{
  //       const findEmail= getEmail.find((e)=>e.email===values.email)
  //       if(typeof findEmail==="undefined"){
  //         const item = values
  //         const reacod = [...data,item]
  //         localStorage.setItem("user",JSON.stringify(reacod))
  //       }
  //     }
    
  // }

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form onSubmit={formik.handleSubmit} className="mx-1 mx-md-4" >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name='firstName'

                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                          />
                          {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-danger'>{formik.errors.firstName}</div>
                          ) : null}
                          <label className="form-label" htmlFor="form3Example1c ">
                            First Name
                          </label>



                        </div>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          name='lastName'

                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className='text-danger'>{formik.errors.lastName}</div>
                        ) : null}
                        <label className="form-label" htmlFor="form3Example3c">
                          lastName
                        </label>

                      </div>




                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                          ) : null}
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>



                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
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
                            <div className='text-danger' >{formik.errors.password}</div>
                          ) : null}
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>


                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="typepasswordX"
                            className="form-control"
                            name='Confirmpassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Confirmpassword}

                          />
                          {formik.touched.Confirmpassword && formik.errors.Confirmpassword ? (
                            <div className='text-danger' >{formik.errors.Confirmpassword}</div>
                          ) : null}
                          <label className="form-label" htmlFor="form3Example4cd">
                            Confirm password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">


                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Register
                        </button>

                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Register
