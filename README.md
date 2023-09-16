# Project Features

- Course Selection
- Credit Hour Calculation
- Toast Notification

# State Management:

1. Course Selection State: To track which courses are selected, a state variable which is an array, is used. When a user clicks the select button, the state is updated to include the selected course.

2. Total Credit Hours State: Another state is used to keep track of the total credit hours based on the selected courses. Each time a course is added, this state variable is updated to reflect the new total. This ensures that users can see their credit hours and prevent them from exceeding the allowed limit.

3. Remaining Credit Hour State:
   Another state is used to keep track of the remaining credit hours available to the user. This state variable helps users stay within their allowed credit limit and provides real-time feedback on how many credit hours they have left to allocate.
