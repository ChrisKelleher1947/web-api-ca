import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieReviews = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return response.json();
};

export const getMovie = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  

  export const getMovieRecommendations = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch recommendations');
    return response.json();
};

export const getMovieImages = async (id) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
    );
    if (!response.ok) throw new Error('Failed to fetch recommendations');
    return response.json();
};



export const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || "Something went wrong");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching popular movies:", error.message);
      throw error;
    }
  };
  
  

