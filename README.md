# wsum8543-tracker wip readme
## Config & deployment
The application contains three major files and :
* index.html
* script.js
* style.css

T

The web application is built for screens with a standard PC width of 1920px and the mobile width of 600px. The height is set to designed to best run at the max PC height of 1080px. 
As the web application uses Node, users will first have to run a command to install the dependencies with in their terminal with
`npm install`
Afterwards, to run the application, users will have to use 
`npm run dev`

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

### May 31 2023


To document the development process, you will need to create a log of your work, highlighting any iterations and improvements on the designs. 

## Further Iterations

## References

![image](readmeimgs/img1.png)