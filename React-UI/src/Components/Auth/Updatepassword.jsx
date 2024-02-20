import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../store/authSlice/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
 

const Updatepassword = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const {token} = useParams()

  const formik = useFormik({
    initialValues: {

      password: '',
      Confirmpassword: ''

    },
    validationSchema: Yup.object({

      password: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required')
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
      //  console.log("values",values);
      dispatch(updatePassword({values,token})).unwrap().then((response)=>{
      //  console.log("response",response)
      if(response.success===true)
      navigate("/")
      })
    },
  });
  return (
    <div className="container w-50 my-4">
      <form  onSubmit={formik.handleSubmit}>
        <h2 className='mb-4'>Change password</h2>

        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
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

        </div>

        <div className="mb-3">
          <label className="form-label">
            Confirm Password
          </label>
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

        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>

  )
}

export default Updatepassword
