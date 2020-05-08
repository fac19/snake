# :snake: Snakes :snake

![snakes](https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Ff2249080-054b-11ea-a958-5e9b7282cbd1?fit=scale-down&source=next&width=700)


## How to play
- Select your snake / character
- Use the arrow keys to navigate the screen
- Collect votes / to stay alive 
- The aim of the game is to survive for the longest amount of time.

## Initial ideas

### Hacking the game logic 
- This project looks at the core game logic and hacks it! 
- In snake's original feedback loop -> 
  - Snake eats food and gets bigger. 
  - snake takes up game spaces until the snake crashes into itself. 
 
### Our revised game logic 😮

### Game logic
- Length of snake decreases on move / over time 🆕 :ballot_box_with_check:
- snake eats food and length increases :ballot_box_with_check:
- speed of snake increases when snake eats food :ballot_box_with_check:
- snake hits self / wall and dies 🆕 :ballot_box_with_check:

- By introducting this new game variable it changes the gameplay of snake making it a challenge to stay alive. Therefore points are based on time alive rather than final length.

### Integration tests :negative_squared_cross_mark:
- Snake moves over time / on move :negative_squared_cross_mark:
- Snake moves up when up button pressed :negative_squared_cross_mark:
- Snake length decreases on move :negative_squared_cross_mark:
- Snake length increases on food :negative_squared_cross_mark:
- Snake dies when hitting wall :negative_squared_cross_mark:
- Snake dies when hitting self :negative_squared_cross_mark:

### Design
- Boris and Nigel :ballot_box_with_check:
    - choose your snake for different colour, face on head of the snake?  :ballot_box_with_check:
- Giphy snake background  :ballot_box_with_check:
![snake](https://media.giphy.com/media/QtZKO7mb7ebpC/giphy.gif)
- CSS grid? background-color transparent / rgba with decreasing opacity  :ballot_box_with_check:
- User defines size of grid  :negative_squared_cross_mark:
- game over -> random nigel or boris gif. :negative_squared_cross_mark:
- two snakes??? awsd :negative_squared_cross_mark:


## Prioritisation
- Create game grid / board (CSS) :ballot_box_with_check:
- [How to make snake](https://youtu.be/-oOgsGP3t5o) :ballot_box_with_check:
- Create snake sprite (RGBA bg-color, array of posX posY) :ballot_box_with_check:
- Create food sprite (coloured dots, posX & posY - random) :ballot_box_with_check:
- Implement Movement (update the snake positions array) :ballot_box_with_check:
- Implement the length increase logic (append snake segment) :ballot_box_with_check:
- Implement the snake death logic (if snake posX, posY, overlaps then game over) :ballot_box_with_check:
- Implement speed (decrease ~~setTimeOut~~ useRef() value) :ballot_box_with_check:

## Available Ssssscriptsssss - from Mark Zuckburger

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
