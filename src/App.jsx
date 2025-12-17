import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { AuthGuard, GuestGuard } from './components/common/RouteGuard'; 

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Create from './components/create/Create';
import RecipeList from './components/recipe-list/RecipeList';
import Details from './components/details/Details';
import Edit from './components/edit/Edit';
import NotFound from './components/not-found/NotFound';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<RecipeList />} />
                <Route path="/catalog/:recipeId" element={<Details />} />

                <Route element={<GuestGuard />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<AuthGuard />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/catalog/:recipeId/edit" element={<Edit />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
      < Footer />
      </div>
    </AuthProvider>
  );
}

export default App;