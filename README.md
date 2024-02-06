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