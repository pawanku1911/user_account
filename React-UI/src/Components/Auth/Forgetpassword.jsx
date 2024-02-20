import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { forGot } from '../../store/authSlice/authSlice'
import { useNavigate } from 'react-router-dom';

const Forgetpassoword = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
 
       console.log("val", values);
      dispatch(forGot(values)).unwrap().then((response) => {
        if (response.success === true) {
        }
        // navigate("/change/:token")
      })
    },
   
  });


  return (
    <div className="container my-4  w-25">

      <form onSubmit={formik.handleSubmit} style={{ width: "23rem" }}>
        <h2 className='mb-4'>Forget pasword</h2>
        <div className="mb-3">
          <p>Enter your email address and we'll send you an email with instructions to
            reset your password.</p>
          <label className="form-label">
            Email input
          </label>
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
        </div>
        <div className='pt-1 mb-4'>
          <button className='btn btn-info btn-lg btn-block' type='submit'>
            Reset password
          </button>
        </div>






      </form>
    </div>

  )
}

export default Forgetpassoword
