# HyperionDev Web Development Capstone ProjectiTunes app

## Description

This task is to create a full-stack web application using React and Express that allows users to search for content within the iTunes Store and Apple Books Store by using the iTunes search API. The user can search for an item of media and can filter the search by selecting the media type. The user can also create a list of their favourites by selecting from the output list. The project has been tested with a snapshot test and unit tests for the front and back-end.

## Installation

To run this project:

1. Download this directory, "itunes-capstone-project", to your local machine
2. Navigate to this directory from the command line interface. E.g. cd c:/itunesapp
3. If you have install npm, start the server application by typing "npm start"
4. Now open a new terminal shell and navigate to the "/front-end" directory
5. If you have installed npm, then type 'npm start' to start the front-end application
6. Open [http://localhost:3000](http://localhost:3000) to view in your browser

## Instrctions

### Using the Search Function

Once the project is loaded in the browser, you will see a home screen with a search box and a header bar with links to the Help and Favourites pages. To search an item of media from the iTunes store, enter what you would like to search into the box and then select the dropdown menu to filter your searches to the relevant media type. If left alone then the search will return items of all format types. Once you have input and selected your choices, click the "Search" button and the ourtput results will display underneath the search bar.

### Add a Favourite

To add one of the search results to your "Favourites" list on the right side of the screen, click on the star button on the right hand side of each item returned. Once selected, the project will alert you that the item has been added to your favourites and the star button will toggle to yellow.

To de-select a favourite, click on the star button once more and another alert will tell you it has been removed from your favourites. The star button will then toggle back to grey.

Now navigate to "Favourites" on the right hand side of the header and it will link to a page containing your favourited items. From here you can select the trash can button and the item will be deleted from your favourites.

## Tests

To test this project, I have used a unit test and a snapshot test to test the front-end application and a unit test to test the backend.

### Running the Tests

To test the front-end, navigate to the front-end directory and type 'npm test'. The tests will run and you'll see the results once they have completed. This will run the snapshot test and unit test in App.test.js.

To test the back-end server, navigate to the main directory and type 'npm test'. This will run app.test.js which tests the response of the GET request for /search.

## Security

This app has been secured using Helmet. Helmet is express "middleware" that secures your Express apps by configuring several HTTP headers for security.
