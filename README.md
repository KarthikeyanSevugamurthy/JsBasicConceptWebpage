### **README: Features in Movie Application**

This document explains how each feature is implemented and utilized in the movie application. The app is designed to demonstrate JavaScript concepts with practical, real-world movie application examples.



### **1. Promise, Async, Await**
- **Feature**: Fetch movie details from a mock API or static dataset.
- **Use**: Demonstrates asynchronous programming to fetch and display movie details in a card layout.
- **Example**: 
  - Users click "Fetch Movies," and a promise resolves to fetch movie data.
  - `async` and `await` handle API-like responses for seamless UX.


### **2. Event Loop**
- **Feature**: Simulate adding movies to a list using synchronous and asynchronous tasks.
- **Use**: Explains how the JavaScript event loop processes synchronous and asynchronous operations.
- **Example**:
  - Movies like `"Bagupali"` (synchronous) and `"Joker"` (asynchronous) are added to a list.
  - Users observe how tasks are executed via a button click.



### **3. Garbage Collection**
- **Feature**: Remove unused or old movies from the UI.
- **Use**: Demonstrates how JavaScript handles memory management.
- **Example**:
  - Users click a "Remove Movies" button to simulate garbage collection.
  - Detached DOM elements are removed to free memory.



### **4. Truthy/Falsey**
- **Feature**: Check the truthy/falsy nature of user inputs.
- **Use**: Validate user-entered movie names and display corresponding movie details.
- **Example**:
  - Users input a movie name; if valid (truthy), the movie details are displayed.
  - Handles cases like empty input (`Falsy`).



### **5. Let vs Var**
- **Feature**: Compare `let` and `var` in a real-time context.
- **Use**: Illustrates scoping differences using dynamically added movie data.
- **Example**:
  - Uses `let` in block-scoped operations and `var` for global declarations.
  - Avoids hoisting issues in movie list updates.



### **6. Promise Chaining**
- **Feature**: Fetch and display movies step by step.
- **Use**: Chains promises to fetch movie genres, details, and reviews.
- **Example**:
  - Fetch movies > Fetch genres > Fetch reviews sequentially.
  - Users see how multiple asynchronous tasks are managed.



### **7. Proxy and Reflect**
- **Feature**: Manage movie data using Proxy and Reflect for data validation.
- **Use**: Ensures only valid movie objects are added or updated in the dataset.
- **Example**:
  - Adding a movie with invalid properties triggers a proxy validation error.
  - Reflect ensures efficient handling of movie operations.



### **8. Custom Events**
- **Feature**: Trigger custom events when movies are added or removed.
- **Use**: Allows communication between different components of the application.
- **Example**:
  - A custom "movieAdded" event updates the UI and notifies the user.
  - Helps in decoupling the movie logic and UI updates.



### **9. Prototypes**
- **Feature**: Define common movie-related functions using prototypes.
- **Use**: Shares methods like `getDetails()` across all movie objects.
- **Example**:
  - A `Movie` prototype has a method to return details.
  - Reduces redundancy when creating multiple movie objects.



### **10. DOM Manipulation Techniques**
- **Feature**: Dynamically update the movie list and details.
- **Use**: Demonstrates core DOM methods like `createElement`, `appendChild`, and `innerHTML`.
- **Example**:
  - Users click a button to add movies to the list or update details.
  - Movies are added dynamically, enhancing the user interface.



### **How to Run the Application**
1. Open the **index.html** file in a browser.
2. Navigate to different features displayed in the UI.
3. Interact with buttons to see how each feature works:
   - Fetch movies, add or remove movies, check truthy/falsy, etc.

### **Technologies Used**
- **Frontend**: HTML, CSS (Bootstrap), JavaScript.
- **No Backend**: Static data used for demonstration purposes.



### **Future Improvements**
1. Replace static data with API integration for real-time updates.
2. Add search and filter functionality for movies.
3. Implement a database for storing movie information.

This project provides a foundational understanding of JavaScript features applied in a real-world context!
