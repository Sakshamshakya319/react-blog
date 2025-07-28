import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput, Alert, Button, Spinner } from 'flowbite-react';
import { HiInformationCircle } from "react-icons/hi";


function SignUp() {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value.trim()
    }));
    // Clear messages when user starts typing
    if (errorMessage || successMessage) {
      setErrorMessage('');
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');
    
    // Validate form fields
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill all the fields');
      return;
    }

    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Password length validation
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }
    
    try {
      setLoading(true);
      
      // Simulate API call (replace with your actual API endpoint)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        // Handle error response
        setErrorMessage(data.message || 'Something went wrong during signup!');
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
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
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
              <Label value="Your username" />
              <TextInput
                id="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                className="[&>input]:!bg-white [&>input]:!text-black"
                style={{ background: "white", color: "black" }}
                onChange={handleChange}
              />
            </div>
            
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
                placeholder="password"
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
              ) : 'Sign Up'}
            </Button>
          </form>
          
          <div className='flex gap-2 text-sm mt-5 items-center justify-center'>
            <span>Have an Account? </span>
            <Link to="/sign-in" className='text-blue-500 hover:underline'>Sign In</Link>
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <Alert className='mt-5' color='failure' onDismiss={() => setErrorMessage('')}>
              <span className="font-medium">Error!</span> {errorMessage}
            </Alert>
          )}
          
          {/* Success Message */}
          {successMessage && (
            <Alert className='mt-5' color='success' onDismiss={() => setSuccessMessage('')}>
              <span className="font-medium">Success!</span> {successMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;