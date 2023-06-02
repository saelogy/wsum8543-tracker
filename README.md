# wsum8543-tracker wip readme
## Config & deployment
The application contains three files and a folder of essential images:
* index.html
* script.js
* style.css

The web application is built for screens with a standard PC width of 1920px and the mobile width of 600px. The height is set to designed to best run at the max PC height of 1080px. 
As the web application uses Node, users will first have to run a command to install the dependencies with in their terminal with
`npm install`
Afterwards, to run the application, users will have to use 
`npm run dev`

***

## Development log
### May 12 2023
The basic structure of the site is set up. Server, css, html and readme files. This did not include any coding work. The html file was a base with the default DOCTYPE setup, css and script files were empty (minus the server setup scripts).
### May 26 2023
The basic visual structure of the html file are set up. Listing out all the required elements to make the app function made it easy to organise everything afterwards. Important to make tags like classes and ids clear at this stage as it will impact all future development.
With some simple javascript and html tweaking, basic functionalities such as popups and the set up of the basic form were set up. More advanced functionalities such as the ability to take user input and slot into the movie list was also added at this stage. 
### May 27 2023
All "basic" functionalities suck as clickable/expandable items and functioning forms, etc. are complete. I also played around with localStorage() to try and make session data and user records persist through multiple instances. However, I couldn't get it to work, when I think I managed to get it working (eg. using stringify to transform objects into strings in order to insert into an array to be saved by the browser), it messes up another part of the site (eg. the list of movies stopped displaying completely).
### May 29 2023
Decided to move away from localStorage in order to start working on the visual design on the application. Since css files tend to be long, I tried to keep the structure organised by listing the elements from class to ids and from visually larger elements to smaller ones. However, this would end up being useless since some elements conflict each other's hierarchy. 
I also changed some design elements of the app as I was unable to get them to behave the way I wanted them to; namely, the delete button. Initially, I had wanted the delete button to be situated inside the expanded item note box, however it would decrease its user friendliness as it would make deleting an item two clicks instead of one. 
### May 30 2023
Made the "mobile" version (600px width) of the application.  
### May 31 2023
Updates to readme file.
### June 1 2023
Seemingly got localStorage to work but it broke almost every other functionality of the app. Testing reveals it still does not work. Objects are repeated within the list and/or localStorage is not able to display on list. 
### June 2 2023
Basically a complete restart of the entire javascript code to try and better understand all the elements and functions that were used. With this, I finally managed to get localStorage to work but is still unable to delete items in localStorage. On load, the site would also not show stored items until after at least one new element is added. Was able to get everything to work as intended after moving functions around and renaming variables. Having had another person look over my code was very helpful to spot the errors I had not noticed. Also added functionalities which make the user experience more streamlined. Eg. if movie name has previously been added to tracker already, a notice will pop up and not allow user to add the same item twice.

***

## Further Iterations
In the future the application could possibly be improved in three ways:
* **Allowing users to upload poster images. (and by extension, header image)** This would make identifying movies easier as the list grows longer and it also gives the user a degree of personalisation.
* **Tracking a series of emotions.** Most movies aim to have the audience feel more than one emotion, being able to track a series of emotions throughout the film could provide an interesting metric for the users to see how their thoughts on a movie changed as it went on.
* **Tracking location where movie was consumed.** This might not be a metric which stands out as being important. However, the environment one is in when watching movies affect their perception and enjoyment of the film. Letting users log simple things like "location: cinemas" may help categorising why they had felt a certain emotion during the movie's runtime. 

***

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
* https://www.flaticon.com/authors/freepik
* https://www.flaticon.com/authors/those-icons
* https://www.flaticon.com/authors/joalfa
* https://stackoverflow.com/questions/61169448/click-on-the-list-item-it-toggles-the-line-through-sytle-class-on-and-off
* https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format