import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import SiteHeader from './components/siteHeader';
import SignInPage from './pages/signInPage';
import HomePage from "./pages/homePage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingPage from "./pages/upcomingPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchMoviesPage from "./pages/mustWatchPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieCastPage from "./pages/movieCastPage";
import MoviesContextProvider from './contexts/moviesContext';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Firebase config and initialization
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOwcsypbGPtXlSBNQ2BNrzIVxCH-1TxFs",
  authDomain: "webappdev2-e0cf1.firebaseapp.com",
  projectId: "webappdev2-e0cf1",
  storageBucket: "webappdev2-e0cf1.firebasestorage.app",
  messagingSenderId: "264762527585",
  appId: "1:264762527585:web:8dd7556de17a23ef17bf20",
  measurementId: "G-7FSGE5MMXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Check auth state on app load
  useEffect(() => {
    const auth = getAuth(app); // Pass initialized app

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Set user if authenticated
      } else {
        setCurrentUser(null); // Clear user if logged out
      }
    });

    
     signOut(auth);  //For test purposes
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesContextProvider>
        <BrowserRouter>
          <SiteHeader />
          <Routes>
            {currentUser ? (
              <>
                {/* Authenticated Routes */}
                <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/movies/upcoming" element={<UpcomingPage />} />
                <Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />
                <Route path="/movies/popular" element={<PopularMoviesPage />} />
                <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
                <Route path="/movies/:id/cast" element={<MovieCastPage />} />
              </>
            ) : (
              <>
                {/* Non-authenticated Route */}
                <Route path="/login" element={<SignInPage />} />
                <Route path="/" element={<Navigate to="/login" />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </MoviesContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
