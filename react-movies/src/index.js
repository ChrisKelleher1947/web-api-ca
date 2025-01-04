import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import LoginPage from './pages/loginPage';
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
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/siteHeader";
import SignUpPage from "./pages/signUpPage";

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
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                        <Route path="/reviews/:id" element={<MovieReviewPage />} />
                        <Route path="/movies/:id" element={<MoviePage />} />
                        <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                        <Route path="/movies/upcoming" element={<UpcomingPage />} />
                        <Route path="/movies/mustWatch" element={<MustWatchMoviesPage />} />
                        <Route path="/movies/popular" element={<PopularMoviesPage />} />
                        <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
                        <Route path="/movies/:id/cast" element={<MovieCastPage />} />
                      </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                      </AuthContextProvider>
      </BrowserRouter>
      </MoviesContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
