import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
        <Route path="/projects" element={<h1>Project Page</h1>} />
        <Route path="/sign-up" element={<h1>Sign Up Page</h1>} />
        <Route path="/sign-in" element={<h1>Sign In Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 