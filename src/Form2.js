import React from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'

function Form2() {
  const initialValues = {
    name: '',
    password: '',
    description: '',
    email: '',
    title: '',
    gender: '',
    hobbies: [],
    checkbox: false
  }

  const onSubmit = values => {
    console.log('form data', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    password: Yup.string().required('Please enter password'),
    description: Yup.string().required('Please describe yourself in more than 50 words').max(50, 'Please describe yourself in more than 50 words'),
    email: Yup.string().required('Please enter your email address').email(),
    title: Yup.string().required('Please select something'),
    // gender: Yup.boolean().required().oneOf('please select one'),
    gender: Yup.string().required('Please select one'),
    hobbies: Yup.array().min(1, 'Please select at least 1'),
    checkbox: Yup.boolean().oneOf([true], 'Please accept terms and conditions')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>

      <Form>
        <div >
          <h3 className='text-center'>FORM NO 2</h3>
          <div className='row mt-3'>
            <label htmlFor='name' className="col-sm-1 offset-sm-2 field" >
              NAME
            </label>
            <div className="col-sm-8">
              <Field type='text' id='name' name='name' placeholder='Please enter your name' className='form-control' />
            </div>
          </div>
          <span className="text-danger  offset" ><ErrorMessage name='name' /></span>

          <div className='row mt-3'>
            <label htmlFor='password' className="col-sm-1 offset-sm-2 field">PASSWORD</label>
            <div className="col-sm-8"  >
              <Field type='text' id='password' name='password' placeholder='Please enter your password' className='form-control' />
            </div>
          </div>
          <span className='text-danger offset ' ><ErrorMessage name='password' /></span>

          <div className='row mt-3'>
            <label htmlFor='description' className="col-sm-1 offset-sm-2 field">DESCRIPTION</label>
            <div className="col-sm-8">
              <Field type='text' id='description' name='description' placeholder='Please enter description' className='form-control' />
            </div>
          </div>
          <span className="text-danger offset "><ErrorMessage name='description' /></span>

          <div className='row mt-3'>
            <label htmlFor='email' className="col-sm-1 offset-sm-2 field">EMAIL</label>
            <div className="col-sm-8">
              <Field type='email' id='email' name='email' placeholder='Please enter email' className='form-control' />
            </div>
          </div>
          <span className="text-danger offset"><ErrorMessage name='email' /></span>


          <div className='row mt-3'>
            <label htmlFor='title' className="col-sm-1 offset-sm-2 field" >TITLE</label>
            <div className="col-sm-8">
              <Field type='text' id='title' name='title' className='form-control' />
            </div>
          </div>
          <span className="text-danger offset"><ErrorMessage name='title' /></span>


          <div className='mt-3'>
            <label htmlFor='gender' className="col-sm-1 offset-sm-2 " style = {{textAlign: 'end', paddingRight: 15, marginRight: 5}}>GENDER</label>
            <div className="form-check form-check-inline">
              <Field type='radio' id='male' name='gender' className="form-check-input" value='male' />
              <label htmlFor='male' className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline ">
              <Field type='radio' id='female' name='gender' className="form-check-input" value='female' />
              <label htmlFor='female' className="form-check-label">Female</label>
            </div>
            <div >
            </div>
          </div>
          <span className='text-danger offset'><ErrorMessage name='gender' /></span>

          <div className='mt-3 '>
            <label htmlFor='hobbies' className="col-sm-1 offset-sm-2" style = {{textAlign: 'end', paddingRight: 15, marginRight: 5}}>HOBBIES</label>
            <div className="form-check form-check-inline justify-content-evenly">
              <Field type='checkbox' id='cycling' name='hobbies' className="form-check-input " value='cycling' />
              <label htmlFor='cycling' className="form-check-label">Cycling</label>
            </div>
            <div className="form-check form-check-inline justify-content-evenly">
              <Field type='checkbox' id='reading' name='hobbies' className="form-check-input" value='reading' />
              <label htmlFor='reading' className="form-check-label">Reading</label>
            </div>
            <div className="form-check form-check-inline">
              <label htmlFor='dancing' className="form-check-label">
                <Field type='checkbox' id='dancing' name='hobbies' className="form-check-input" value='dancing' />Dancing
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label htmlFor='traveling' className="form-check-label">
                <Field type='checkbox' id='traveling' name='hobbies' className="form-check-input" value='traveling' />Traveling
              </label>
            </div>
            <div>
            </div>
          </div>
          <span className='text-danger offset'><ErrorMessage name='hobbies' /></span>

          <div className='text-center justify-content-evenly'>
            <label htmlFor='checkbox'>
              <Field type="checkbox" id='checkbox' name='checkbox' />I ACCEPT TERMS AND CONDITIONS
            </label>
            <div>
              <span className='text-danger paddingLeft6' ><ErrorMessage name='checkbox' /></span>
            </div>
          </div >

          <div className='text-center'>
            <Button type='submit' variant="primary" className='text-center'>Submit</Button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default Form2
