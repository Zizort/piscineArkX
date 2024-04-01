import React from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//switch from usestate to redux
import { useDispatch, useSelector} from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  // using usestate
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);

  // using redux instead of usestate
  const {loading, error: errorMessage} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelChange = (e) => {
    // console.log(e.target.value);
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrorMessage('Please fill out all feilds.');
      return dispatch(signInFailure('Please fill out all feilds.'));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message))
      }
      // setLoading(false); not needed signinfailure set loading to false usinf redux
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (err) {
      // setErrorMessage(err.message);
      // setLoading(false);
      dispatch(signInFailure(err.message));
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/*left logo*/}
        <div className='flex-1'>
        <Link to='/' 
        className='font-bold dark:text-white text-4xl'>
          blog
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >stack</span>
        </Link>
        <p className='text-sm mt-5'>
          welcome to your tech blog.
        </p>
        </div>
        {/*right*/}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {/* <div>
              <Label value='Enter Username'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handelChange}/>
            </div> */}
            <div>
              <Label value='Enter Email'/>
              <TextInput type='email' placeholder='EX: user@email.com' id='email' onChange={handelChange}/>
            </div>
            <div>
              <Label value='Enter Password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handelChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'
              } 
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>)
          }
        </div>
      </div>
    </div>
  )
}
