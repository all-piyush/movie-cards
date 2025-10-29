# Random Movie Card Generator
A React-based web app that fetches random popular movies from the TMDB API and displays them with genre filtering. Users can explore movies by categories like Romance, Horror, Comedy, Drama, or view all.
# Features
- Fetches random movies from The Movie Database (TMDB) API.
- Filter movies by genre (Romance, Comedy, Horror, Drama).
- "Generate" button to explore a new random set of movies.
- Clean UI with movie posters, titles, release dates, and short descriptions.
- Notifications using React Toastify (can be used to show fetch success/error or user actions).
# Tech Stack
- React (Frontend framework)
- React Icons (for UI icons)
- React Toastify (for notifications)
- TMDB API (movie data source)
# Installation
git clone https://github.com/your-username/random-movies-explorer.git

cd random-movies-explorer

npm install

# Setup
Create a .env file in the root folder and add your API key:


REACT_APP_TMDB_API_KEY=your_api_key_here

# Run Locally


npm start
