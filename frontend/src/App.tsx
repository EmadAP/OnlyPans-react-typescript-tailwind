import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './context/useAuth';
import HomePage from './HomePage';
import LoginPage from './scenes/loginPage';
import RegisterPage from './scenes/registerPage';
import SearchPage from './scenes/recipes/searchPage';
import MyRecipes from './scenes/recipes/myRecipes';
import SearchMyRecipes from './scenes/recipes/searchMyRecipes';



function App() {
  return ( 
    <div className="app bg-gray-20">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='login/register' element={<RegisterPage />} />
            <Route path='searchPage' element={<SearchPage />} />
            <Route path='myRecipes' element={<MyRecipes />} />
            <Route path='searchMyRecipes' element={<SearchMyRecipes />} />
          </Routes>
            <ToastContainer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
