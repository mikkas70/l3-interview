# TypeScript and React Coding Challenge

This coding challenge is designed to assess your skills in TypeScript and React for a level 3 technical interview.

## Task 1: Creating the Square

Create a new component named "Square" with the following requirements:

- The square must be 80px by 80px in size.
- The Square component should accept a `color` prop which is a string representing a color (e.g., 'red', 'blue'). The Square's background color should reflect the value of this prop.

## Task 2: Managing State

Update the Homepage component to manage an internal state representing an array of squares with these requirements:

- Initialize the state with an array of two objects, each representing a square. One object should have a `color` property set to 'red', and the other set to 'blue'.
- Render a Square component inside the SquareGrid component for each square object in the state array. The `color` prop of each Square should match the `color` property of the corresponding square object.

## Task 3: Styling the Grid
Style the SquareGrid component using SCSS Grid to arrange the Square components:

Use CSS Grid layout to display the Square components in a grid with the following specifications:
- Each row should have 5 squares, meaning every 5 squares should wrap onto a new row.
- There should be a minimum gap of 10px between each square.
- Each grid item should have its content centered horizontally and vertically.
Note: The square component itself should not be modified for this task. All grid-related styling should be applied to the SquareGrid component.

## Task 4: Filtering Data

Update the information displayed on the homepage according to the following:

- "Total number of squares:" should represent the total count of square objects in the state.
- "Total number of blue squares:" should represent the count of square objects in the state that have their `color` property set to 'blue'.

## Task 5: Creating Actions

Implement an action for the "Add red square" button:

- When this button is clicked, a new red square should be appended to the list of squares.

Implement an action for the "Paint all squares blue" button:

- When this button is clicked, every square object in the state should have its `color` property changed to 'blue', effectively painting all the squares blue.

## Task 6: Implementing hooks

Create and implement a custom hook within the Homepage component that handles the following logic:

- When the amount of squares in state is greater than 10, the hook should remove all squares from the squares array.

## Task 7: Conditional Rendering
Demonstrate your understanding of conditional rendering:
Implement a feature such that if there are more than 8 squares in the grid, render a message saying "Wow, that's a lot of squares!" instead of the total square count.

