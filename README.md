## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app fulfills the following requirements:
- Fetches pictures from the last ten days using NASA's Astronomy Picture of the Day API 
- Each result displays a title, date of capture (in earth_date), and a description
- Button to like the image
- HTML is semantic to the best of my knowledge

The following extras were added:
- Likes on an image are saved and will persist when users leave or reload the page
- The like button has a simple animation to it
- The app has a loading state for when it is waiting on the API to return data 

### `npm test`

Launches the test runner in the interactive watch mode.
The app include two simple tests:
- The first test is to check if the app renders and displays the heading
- The second one tests whether or not axios makes an API call 
