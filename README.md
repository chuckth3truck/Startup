# THE ULTIMATE HELP QUEUE
## Description Delivarible
### Elevator Pitch
Imagine with me for second, imagine you are stuck in some remote part of the world with only your wits, and a computer with internet access. You are stuck there with no food, water or shelter. You pull out your internet capapble computer and you of course ask google what you should do. "How can I servive this". You search and search for an article or forum that can help but all of them are about how to survive in environments that have nothing to do with your situation? you are stuck hopeless until you remember your coleauge talking about a service he had heard of called THE ULTIMATE HELP QUEUE!!!!!! You log in and are able to type in your exact situation and than get on the Queue. A few momoents later you are bruaght in to a chat with a real person specifically trained to help you get through your exact situation. No more scowering the web looking for specifics in all of the articles and forums dealing in generalities, you are able to get exactly that help you need. This is the power of THE ULTIMATE HELP QUEUE!!!!!

### DESIGN
![Here is a picture of the basic design for my web paige, for the both the helpee and helper view.](/DesignDeliverable.png)

### KEY FEATURES

* Secure login with HTTPS
* Ability to input quesitons and subjects into the queue
* ability for the helper to see:
    * the persons name
    * their question and the subect of the question
    * how many people are in the queue
    * How many people have been helped
* ability for helpee to see their postion in the queue
* the amount of people that have been helped wil be persistantly stores
* ability for helpers to accepts or decline questions

### TECHNOLOGIES

* HTML: Use HTML for basic structure, three HTML paiges:
    1. for login
    2. for helper view
    3. for helpee view
* CSS: Making the application look good and inuitive to use
* JavaScript: Login, question submit, accept or decline question
* service: Proived functionality for 
    * login
    * submitting questions
    * retrieving questions
* DataBase and Login: Store users, questions, and permissions in database. Helper ID's stored in Database and you can only 
answer question if you are a helper
* Websocket: notify helper when there is a question for them
* React: Application will use react at the final stage

## HTML Deliverable 
* HTML Pages - built three HTML pages that represent th login, the queue, and the "ask a question page"
* Links - login links to question page, there are thinks to the other pages
* text - the question boxes have a textual description
* Img - I wasn't sure exactly what to do here. I added a picture to my queue page but i wasn't sure what it should be of. . . . so its a rock idk i hope you like it.
* Login/DB - login boxes and submit button are there, the questions in the queue represent stuff pulled from the database.
* WebSocket - total tally of people helped in question page represents realtime tally. 

## CSS Deliverable
* 30% Header, footer, and main content body (done) - used flexx to layout sections
* 20% Navigation elements (done) - menu items take you to different paiges
* 10% Responsive to window resizing (done) - looks good on desktop and ipad, phone not so much
* 20% Application elements (done) - created table using bootstrap
* 10% Application text content (done) - using many different fonts, such as fantasy and sans-sarif
* 10% Application images (done) - created a margin around my images. 

## JavaScript Deliverable
* 20% JavaScript support for future login. - login takes user to question paige
* 20% JavaScript support for future database data. - code stores name and question data in local storage
* 20% JavaScript support for future WebSocket. - table automatically updates with people's username and their question
* 40% JavaScript support for your application's interaction logic. - table has button which accepts persons question request and then updates the button to remove the person from the queue in both the table and local storage. 

## Service Deliverable
* 40% - Create an HTTP service using Node.js and Express - Created http service using node and express
* 10% - Frontend served up using Express static middleware - frontend files are served up through service
* 10% - Your frontend calls third party service endpoints - frontend calls a get random picture api and a chuck norris quote api
* 20% - Your backend provides service endpoints - backend provides get, post and delete for the queue
* 20% - Your frontend calls your service endpoints - frontent calls to update the queue, delete from the queue and get the queue

## Login Deliverable
* 20% - Supports new user registration - can create new account 
* 20% - Supports existing user authentication - can login to existing account
* 20% - Stores application data in MongoDB - stores queue data in mongodb
* 20% - Stores and retrieves credentials in MongoDB - strores user info and creds in mongodb
* 20% - Restricts application functionality based upon authentication - only certain users are able to accept/decline items in queue
at the moment the user login info to do this is pass: A, username: A