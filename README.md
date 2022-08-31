# Lesson Notes

**Sunday Jan 16, 2022**

Started the day by setting up this git repo. Learning to use git again.

Finishing the day on part 1c of the course. Got up to 'Stateful Component' and am having trouble making much sense of it!

Will try again tomorrow.

**Monday Jan 17, 2022**

Continued working through part 1c. Beginning to understand useState. Taking notes in a workbook for future reference.

**Tuesday Jan 18, 2022**

Feeling like I have a solid understanding of useState now. Taken some thorough notes. Finished working through part 1D and am ready to attempt exercises 1.6-1.14.

**Wednesday Jan 19, 2022**

Finished all of part 1. The exercises were quite challenging, but extremely satisfying to overcome. Making a small start on part 2 tonight. Watched 3 videos about functional programming and I'm already excited to learn more. Figured out why git isn't logging my commits.

**Saturday Jan 22, 2022**

Finished part 2a, retrieving data from much more complex data structures like hashes within arrays. Seeing the app as a web page as opposed to in the terminal is really cool. Loving it!

**Wednesday Jan 26, 2022**

Working on the exercises at the end of part 2b. I'm up to exercise 2.8 but don't have the time or focus right now to complete it. There's a lot of confusing event handling going on with the forms that are being used. Will need to do some solid revision on this part.

Edit: Came back to the exercises of part 2b and managed to finish them off this evening.

**Tuesday February 1, 2022**

Half way through the exercises in 2c "Getting data from server". Pulling in API data and allowing users to search through it. Very useful!

Came back to the challenges after rehearsal. Managed to complete 2.13 to a working standard, but I'm not happy with how easily the navigation breaks. Feels like I've got too much code - it's not simple enough.

**Tuesday February 8, 2022**

Finished Part 2c. Found it challenging to fetch API data using an API key but managed in the end. Had to implement conditional rendering in 'DisplayCountries.js' so that the app wouldn't break while it was still in the process of fetching the weather data. Also figured out that when using variables in an API call URL, I need to use backticks `` and surround the variable with ${} in order for it to work. Lots of learning in this section!

Beginning Part 2d shortly.

Had a very productive day. Finished all of 2d and 2e, ready to move on to part 3!

**Tuesday March 1**

Finished part 3a, making a simple backend with express. Trying to move into part 3b but I must've misunderstood some of the last part, as my backend is written to work with the phonebook app, not the notes app :(

**Friday March 4**

Making a renewed push to get this course finished by the end of June. I'm currently at part 3b trying to figure out what's going on with the backend of 'notes'.

**Saturday March 12**

I've finally finished part 3b, and moved on to part 3c. It's becom evident that the folder structure I've chosen isn't working extremely well, so I'm trying to restructure them to make more sense. It's super complicated with git though, and I keep fucking up and having to undo mistakes (usually deletions)

I'm in COVID-iso for another 5 days, so hopefully I'll get a good productive push out of this time.

Finishing up today part way through part 3c, I'm currently setting up a MongoDB account, awaiting the cluster to be ready so that I can finish the setup process.

**Sunday March 13**

Continuing on from yesterday, I've now got MongoDB up and running and have been successfully adding new database entries, as well as retrieving them with the .save and .find functions respectively. I am about to implement MongoDB into my Notes application after taking a short break.

Continued after a short break. I've just separated the MongoDB code into a separate module, and added a .env file to store sensitive info, as well as adding config vars to heroku. I'm up to 'Database configuration into its own module' in part 3c.

**Monday March 14**

Managed to grind my way through all of part 3c and part 3c today. Finally up to part 4! I've got an app fully deployed on heroku and mongodb with a decent amount of error handling, and I've linted the code for the app.

Today I had some good success using a pomodoro timer app, https://pomofocus.io/

I think I'll use it again tomorrow!

**Tuesday March 15**

Managed to work my way through part 4a today - solid progress! Today I went through restructuring the backend of the notes app, then creating a new working backend from a supplied index.js file of a blog-list application. Rebuilding the backend from just the index file was super challenging, but definitely helped my understanding of importing and exporting components.

After that, I wrote some custom tests for the new blog-list backend which was really tedious, but actually really fun as it is basically just a lot of problem solving. Managed to get all tests to pass and output exactly what was expected. I'm done for today I think!

**Thursday April 21**

It's been over a month since I last had a look at Full Stack Open. I've been busy working on a new small business doing web design, but I am unsure as to the future of the business, so I'm pushing forward with the course as this is something I'm much more passionate about.

Today I managed to finish section 4b - testing the backend. I set up a more robust testing environment, changing environment variables, installed and used supertest, set up a test database in MongoDB, wrote my tests and routes using async/await instead of promises, some backend refactoring to make everything more sensical, and then applied all of that to my own blog-list application. I thought I was stumped on challenge 4.14 rewriting the HTTP router for PUT requests using async/awaits, but it was actually some very simple syntactical issues in the end *phew*.

On to 4c tomorrow.

**Tuesday May 10**

I must have forgotten to log diary entries after the last one in April - I have now finished section 4 and am moving on to section 5. I've been much less focused than I would like with coding. I have been distracted with work, life, and mental health. I'm going to attempt to be more frequent with my studies even in situations where I may only have 1-2 hours spare.

Starting section 5a 'login in frontend' today.

**Thursday May 12**

Finished off section 5a today! Also found a bug that was preventing my note app and blog app from re-rendering when a new blog or note was added using a POST request from axios. I was returning the 'response.data' from the HTTP request, and then attempting to concatenate the 'response.data' to the state which contained the array of stored blogs/notes. I was specifying 'response.data' once, and then again at the point of concatenation, so I changed the return from the POST request to just 'response' and then specified 'response.data' at the point of concatenation, which made react happy and allowed it to re-render the list of notes/blogs without having to refresh the page. Finding and fixing bugs is really where I'm learning the most, even though they are incredibly frustrating and seemingly impossible!.

On to section 5b next.

**Monday August 29**

Back in the coding hotseat for the past couple of days. I've been encountering yet another issue with getting my ./part2/notes/ frontend to work. I had two main issues.

Issue 1) In /services/login.js I did not have the export for the 'login' const surrounded by curly brackets. This meant that when the code came to execute the 'handleLogin' function in App.js, it did not have access to 'loginServices' and so it was immediately pushing the code to the error exception handler

^Actually on further inspection, I'm unable to recreate this issue, so I'm still unsure what the issue really was.

Issue 2) In /services/notes.js, in the create function, I was returning 'response' only instead of 'response.data'

Now finished the walkthroughs for 5b, about to start exercise 5.5

**Tuesday August 30**

Took a break from course content to work on my portfolio today. Digging through some old react projects from this course and looking ahead to see which projects I'll be wrapping up soon.

I'm going to include the Countries app as it takes data from external APIs. I've designed a nice UI in Figma and now I'm attempting to learn how to style the app.

It looks like the Blogs app will be wrapping up at the end of part 7 and a bunch of awesome features will be added by that time, which will make for a nice portfolio piece! Perhaps once that's done I'll attempt to make my recipe app

**Wednesday August 31**

Beginning the process of styling the Countries app to match my UI Design in Figma.

After about 5 hours of work, I've successfully styled my app to look nearly identical to my Figma file! Learned a lot about how react compiles into HTML, and how to control that with CSS. I now understand why it makes sense to style each component in the component's js file.

About to look into deploying the app somewhere now.