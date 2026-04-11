# Movie Finder

Movie Finder is a simple web app that lets users search for a movie title and view key details such as poster, year, runtime, genre, director, IMDb rating, and plot.

It is built with plain HTML, CSS, and JavaScript, and fetches movie data from the OMDb API.

## Project Highlights

- Search movie by title
- Press Enter or click the Search button to fetch data
- Displays:
  - Poster
  - Title
  - Year
  - Runtime
  - Genre
  - Director
  - IMDb rating
  - Plot summary
- Responsive layout for desktop, tablet, and mobile
- Graceful alert when a movie is not found

## Tech Stack

- HTML5
- CSS3 (Flexbox + media queries)
- Vanilla JavaScript (DOM manipulation + async/await)
- OMDb API: https://www.omdbapi.com/

## Project Structure

```text
Movie Finder/
|-- home.html      # Main page and UI structure
|-- styles.css     # Styling and responsive design
|-- scripts.js     # API call logic and DOM updates
|-- README.md      # Project documentation
```

## How It Works

1. User enters a movie name in the input field.
2. On Enter key or Search button click, `getMovie()` is called.
3. The app sends a request to OMDb using the movie title.
4. If data is found, the UI is updated with movie information.
5. If no data is found, an alert message is shown.

## Setup and Run Locally

1. Clone the repository:

```bash
git clone https://github.com/ChiragGoyal04/MovieFinder.git
```

2. Open the project folder:

```bash
cd MovieFinder
```

3. Run the app:

- Open `home.html` in your browser.
- No build tools or package installation required.

## API Configuration

The API key is currently written directly in `scripts.js`.

```js
let yourKey = "5326bb0c";
```

For learning/demo projects this is acceptable, but for production apps use a backend service to keep API keys secure.

## Current Limitations

- Search is title-based and returns one main matching movie.
- No autocomplete or suggestion list.
- No saved favorites/watchlist.
- Uses browser alerts for validation and errors.

## Possible Enhancements

- Add input validation (alphabet-only or trimmed input checks)
- Add loading state while fetching API data
- Add better error handling for network failures
- Add movie suggestion/autocomplete
- Add watchlist using localStorage
- Replace alerts with in-page error messages

## Live Demo

https://checkaboutmovie.netlify.app/

## Author

Chirag Goyal
