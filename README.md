# MyReads Project

This is a virtual bookshelf built with React using create-react-app and React Router.  The app allows for organizing books across Currently Reading, Want to Read, and Read shelves.  Additionally, you can search the books database by title or author and add new books to your shelves.

## Installation
After cloning the repo, run npm install to install all dependencies, then run npm start to run the application.

## Book Shelves
When starting the app you will be taken directly to your book shelves, which contain your current book collection.  You can use the green dropdown arrows on each book to move it between shelves, or use the "none" option to remove it from your shelves completely.  Your collection will be saved between sessions, and you can always find a book removed from your shelves by using the Search feature.

## Search
The + icon at the bottom-right corner of your shelves page will take you to the search page.  This page allows searching by title or author, and results will update on the screen in real time as you type.  These results are pulled from the BooksAPI, and include the book cover, title, and author list (where available).  The same green dropdown button from your home page is visible in these results, and will reflect which of your shelves this book is currently on & you can use it to move books from the search results to your shelves or from one shelf to another.  If there are no results, you will see a message indicating this for you.  Finally, the left arrow within the search bar will take you back to your shelves.
