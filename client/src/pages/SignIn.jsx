import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput, Alert, Button, Spinner } from 'flowbite-react';
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch,useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

function SignIn() {
   const [formData, setFormData] = React.useState({
      username: '',
      email: '',
      password: ''
    });
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = React.useState('');
    const{loading, error: errorMessage} = useSelector(state => state.user);

    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [id]: value.trim()
      }));
      // Clear messages when user starts typing
      if (errorMessage || successMessage) {  
        setSuccessMessage('');
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Clear previous messages
      setSuccessMessage('');
      
      // Validate form fields
      if ( !formData.email || !formData.password) {
        return dispatch(signInFailure("All fields are required"));
      }
  
      // Simple email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        dispatch(signInFailure("Invalid Email"));
      }
  
      // Password length validation
      if (formData.password.length < 6) {
        dispatch(signInFailure("Password must be at least 6 characters long"));
      }
      
      try {
        dispatch(signInStart());
        
        // Simulate API call (replace with your actual API endpoint)
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
        });
        
        const data = await res.json();
        if(data.success === false){
          dispatch(signInFailure(data.message));
          
        }  
        
        if (!res.ok) {
          // Handle error response
          dispatch(signInFailure(data.message));
        } else {
          // Handle success response
          setSuccessMessage('Account created successfully! Redirecting...');
          setFormData({
            username: '',
            email: '',
            password: ''
          });
          
          
          // Optional: Redirect after success
          // setTimeout(() => navigate('/sign-in'), 2000);
        }
  
        if(res.ok){
          dispatch(signInSuccess(data));
          navigate('/');
        }
      } catch (error) {
        dispatch(signInFailure(error));
      } finally {
        loading(false);
      }
    } 
  
    return (
      <div className='min-h-screen mt-20'>
        <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-center gap-6'>
          {/* Left side */}
          <div className='md:w-1/2'>
            <Link to="/" className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Saksham's</span>
              <span className='text-black'>Blog</span>
            </Link>
            <p className='text-sm mt-2'>This is a blog app made by Saksham Shakya.</p>
          </div>
  
          {/* Right side (Form) */}
          <div className='md:w-1/2'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              
              <div>
                <Label htmlFor="email" value="Your email" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  className="[&>input]:!bg-white [&>input]:!text-black"
                  style={{ background: "white", color: "black" }}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="password" value="Your password" />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="********"
                  value={formData.password}
                  className="[&>input]:!bg-white [&>input]:!text-black"
                  style={{ background: "white", color: "black" }}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="mt-4 bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign In'}
              </Button>
            </form>
            
            <div className='flex gap-2 text-sm mt-5 items-center justify-center'>
              <span>Don't Have an Account? </span>
              <Link to="/signup" className='text-blue-500 hover:underline'>Sign Up</Link>
            </div>
            
            {/* Error Message */}
            {errorMessage && (
              <Alert className='mt-5' color='failure' onDismiss={() => dispatch(signInFailure)('')}>
                <span className="font-medium">Error!</span> {errorMessage}
              </Alert>
            )}
          
          </div>
        </div>
      </div>
    );
}

export default SignIn
