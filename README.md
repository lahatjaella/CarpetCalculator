# Cowboy Rob's Carpet Calculator 🤠

Welcome to the GitHub repository for **Cowboy Rob's Carpet Calculator**. This project calculates the square footage of carpet needed to cover two rooms, including 10% extra for waste. The goal is to take user inputs for room dimensions and display the required carpet area on the page.

## Overview

The project involved completing a function in `script.js` that calculates the total square footage for two rooms based on user inputs. I also utilized several provided helper functions to retrieve user data, perform calculations, and display the results. 

## Contents

- [Introduction](#introduction)
- [Starter Code](#starter-code)
- [Provided Functions](#provided-functions)
- [Deliverable](#deliverable)
- [Extra Credit](#extra-credit)

## Introduction

For this project, I implemented the core functionality of a carpet calculator, which retrieves user input for room dimensions and calculates the square footage, including an extra 10% for waste. The end result is displayed on the page for the user. I also explored some extra credit opportunities to further enhance the project by understanding the provided functions and adding creative CSS styling.

## Starter Code

At the start of this project, the `script.js` file contained an empty function, `calculateCarpet()`, where I was tasked with writing the logic to calculate the total carpet area. The project also provided a few helper functions to retrieve user input for room dimensions and display the results.

```js
function calculateCarpet() {
  // 👇 Write your code here 👇

  // console.log("click");

}
```

## Provided Functions

The Cowboy Rob's Carpet Calculator project came with three provided functions, each essential to completing the final deliverable. I leveraged these functions to interact with the user's input and display the output.

### 1. `getRoomWidth(roomNumber)`

This function accepts a `roomNumber` (either `1` or `2`) and returns the width of the corresponding room as entered by the user. For example, `getRoomWidth(1)` retrieves the width for Room 1.

### 2. `getRoomLength(roomNumber)`

Similar to the `getRoomWidth` function, this function accepts a `roomNumber` and retrieves the length of the room. For example, `getRoomLength(1)` retrieves the length for Room 1.

### 3. `showResult(result)`

This function accepts a number and displays the result on the webpage. After calculating the total carpet area, I used this function to show the final square footage to the user, ensuring they could see the result directly on the page.

## Deliverable

The main deliverable of this project was to calculate the square footage of carpet required to cover two rooms, including an extra 10%. Here’s the breakdown of what was required and how I approached it:

### 1. Calculate Square Footage

I retrieved the width and length of each room using the `getRoomWidth` and `getRoomLength` functions. I then calculated the area for each room using the formula: 

```
area = width * length
```

### 2. Add 10% Extra

After calculating the total area for both rooms, I added 10% extra for waste using the following calculation:

```js
totalAreaWithExtra = totalArea * 1.10;
```

### 3. Display the Result

Finally, I used the `showResult(result)` function to display the total carpet area, including the extra 10%, on the webpage for the user.

## Extra Credit

I took the opportunity to level up the project in two ways:

### 1. Function Comments

I explored the provided `validateRoomNumber` and `validateResult` functions in `provided.js`, adding comments in my `script.js` file to explain their functionality. 

### 2. Custom CSS

To give the page a more personalized touch, I added some custom CSS to style the result display. I made the results more prominent and visually appealing, ensuring the user could easily see the calculated carpet area. 

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For writing the interactive functions that handle user input and calculate the required carpet area.
