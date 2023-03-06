# Hotel Safe Challenge

Ah, the Hotel Safe - the one place where you should store your precious belongings when away from home. But do you? Let’s be real, the challenge isn’t keeping things safe, it's taming your self doubt and anxiety about remembering that dang PIN you set. It’s a game of chance and confidence.

You are tasked to build a web application that simulates a hotel safe. Users should be able to input a 4-digit PIN to lock and unlock the safe. Here are the rules:

- The PIN input should display each digit on the screen, with a limit of 4 digits.
- Pressing the "Enter" button should store the PIN code only if the safe is currently unlocked.
- If the safe is already locked and the "Enter" button is pressed, an error message (e.g., "INVALID") should appear on the display window.
- If the safe is open and the inputted PIN is a valid 4-digit value, the system should save the value to state and use it to update the lock indicator light.
- If the safe is locked and the inputted PIN matches the stored value, the system should unlock the safe, update the indicator light, and clear the state value/display.
- When the safe is currently open, the indicator light should be green. When the safe is locked, the indicator light should be red.
- The "CLR" button should clear the current display.
- You should be able to use the mouse or keyboard to interact with the safe
- Build it as close to the image as possible

<img width="854" alt="hotel safe" src="https://user-images.githubusercontent.com/17975287/208310605-2a32e328-4209-4578-bf31-887b44bc54a6.png">

## _And remember, don't look at the example solution until you've given it your best shot!_

## To run the example solution

Install yarn then run the following commands

- `yarn install`
- `yarn start`

## Here's the checklist

    -[] Mouse operated PIN should show each digit in display on key press with a limit of 4
    -[] Mouse operated Enter button should store the PIN code IF the safe is not currently locked
    -[] Auto Lint
    -[] SASS
    -[] minimal node packages to demonstrate your skills
    -[] PIN should be limited to 4 digits
    -[] PIN should show each digit in display on key press
    -[] Enter button should store the PIN code if the safe is not currently locked
    -[] If the safe is locked on enter, show an error message (eg. INVALID) in the display window
    -[] If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
    -[] If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
    -[] Currently open safe should display a green light, locked should display a red light
    -[] CLR should clear the current display

<https://user-images.githubusercontent.com/17975287/208310728-065a1d4d-9c2f-4ea1-ad08-c4a3ddaef159.mp4>
