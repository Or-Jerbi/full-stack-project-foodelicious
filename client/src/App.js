import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import UserProfile from './pages/UserProfile/UserProfile';
import Navbar from './components/Navbar/Navbar';
import RecipePage from './pages/RecipePage/RecipePage';
import SignupPage from './pages/Signup/SignupPage';
import LoginPage from './pages/Login/loginPage';
import { useUserContext } from './hooks/useUserContext'
import FiltersPage  from './pages/Filters/FiltersPage';
import SearchPage from './pages/SearchPage/SearchPage';


function App() {
  const { user } = useUserContext()
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src="/project-logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            {user && (<Link to="/profile/:userId" className={styles.appLink}>Profile</Link>)}
          </nav>
          <Navbar className={styles.appNav}></Navbar>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={ <Home />} />
            {/* Specific routes should come before dynamic ones */}
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to = "/" />} />
            <Route path="/signup" element={!user ? <SignupPage />: <Navigate to = "/" />} />
            {/* Dynamic route for recipe, placed after specific ones */}
            <Route path="/:id" element={<RecipePage />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
            <Route path="/search/:search" element={<SearchPage />} />
            <Route path="/:id" element={<RecipePage />} />
            <Route path="/filters" element={<FiltersPage />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
