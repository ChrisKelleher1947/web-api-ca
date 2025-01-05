
// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//       throw error
//   });
// };

export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};
  
// export const getMovie = (args) => {
  //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       return response.json().then((error) => {
//         throw new Error(error.status_message || "Something went wrong");
//       });
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

export const getMovie = async (id) => {
  const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

  
  // export const getGenres = () => {
  //   return fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  //       process.env.REACT_APP_TMDB_KEY +
  //       "&language=en-US"
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };;

  export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  // export const getUpcoming = (args) => {
  //   //console.log(args)
  
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getUpcoming = async () => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('User not logged in');
  
    const response = await fetch('http://localhost:8080/api/movies/tmdb/upcoming', {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    if (!response.ok) throw new Error('Failed to fetch movies');
  
    return response.json();
  };

  // export const getPopular = (args) => {
  //   //console.log(args)
  
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then((response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

 

  export const getPopularMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/popular', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };

  export const getTopRated = (args) => {
    //console.log(args)
  
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  // export const getMovieImages = ({ queryKey }) => {
  //   const [, idPart] = queryKey;
  //   const { id } = idPart;
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getMovieImages = async (movieId) => {
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/movies/${movieId}/images`,
        {
            headers: {
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            },
        }
    );
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to fetch movie images');
    }
    return response.json();
};

  

  // export const getMovieReviews = ({ queryKey }) => {
  //   const [, idPart] = queryKey;
  //   const { id } = idPart;
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getMovieReviews = async (movieId) => {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/${movieId}/reviews`, {
        headers: { 'Authorization': `Bearer ${window.localStorage.getItem('token')}` },
    });
    if (!response.ok) throw new Error('Failed to fetch movie reviews');
    return response.json();
};
  export const getMovieCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  // export const getMovieRecommendations = ({ queryKey }) => {
  //   const [, idPart] = queryKey;
  //   const { id } = idPart;
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getMovieRecommendations = async (movieId) => {
    const response = await fetch(`http://localhost:8080/api/movies/tmdb/movies/${movieId}/recommendations`, {
        headers: { 'Authorization': `Bearer ${window.localStorage.getItem('token')}` },
    });
    if (!response.ok) throw new Error('Failed to fetch movie recommendations');
    return response.json();
};

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};
  