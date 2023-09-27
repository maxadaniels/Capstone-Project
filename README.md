**Notes App**
A simple Notes app built using the MERN (MongoDB, Express, React, Node.js) stack, Create React App with TypeScript, and custom styling.

**System Architecture**
The system architecture of the Notes App is as follows:

**Frontend:**
    -Built using React.js with Create React App.
    -Written in TypeScript for type safety.
    -Styled using custom CSS for a unique and visually appealing design.
**Backend:**
    -Built with Node.js and Express.js.
    -Utilizes MongoDB as the database to store notes data.
    -Implements RESTful API endpoints for CRUD operations on notes.

**Web Stack**
The web stack used in this project includes:

**Frontend:**
    -React.js: A popular JavaScript library for building user interfaces.
    -Create React App: A toolchain for creating React applications with zero configuration.
    -TypeScript: A statically typed superset of JavaScript, enhancing code quality and maintainability.

**Backend:**
    -Node.js: A runtime environment for server-side JavaScript.
    -Express.js: A minimal and flexible Node.js web application framework.
    -MongoDB: A NoSQL database for storing notes data.

**Motivation for Architecture**
The choice of the MERN stack was motivated by several factors:

    -Full-Stack JavaScript: Using JavaScript/TypeScript for both frontend and backend allows for code reuse and a more cohesive development experience.

    -React and Create React App: React is a powerful library for building UIs, and Create React App simplifies setting up the project, providing a structured development environment.

    -Node.js and Express: Node.js is known for its high performance and scalability, and Express.js is a popular framework for quickly building robust APIs.

    -MongoDB: MongoDB's flexibility and scalability make it a suitable choice for storing notes data.

**Styling**
The app is styled using a combination of custom CSS and some preset styles. This approach was chosen for the following reasons:

    -Customization: Custom CSS allows for complete control over the app's design, enabling a unique and tailored user experience.

    -Flexibility: By combining custom and preset styles, you can leverage the strengths of existing styles while tailoring specific elements to match your project's branding and requirements.

    -Maintainability: Separating styling concerns using CSS files enhances code maintainability and makes it easier to manage styles across the application.

    -Performance: Custom styling minimizes unnecessary CSS bloat that can be introduced by using large UI libraries or frameworks.


## System Requirements Specification

### How the App Will Work

The Notes Master app is designed to provide users with a simple and intuitive platform for creating, managing, and organizing digital notes. Users can create, edit, and delete notes, categorize them, and customize their appearance.

#### User Roles

- **User**: Any individual who wants to create and manage digital notes.

### Who Will Use It

The Notes Master app is designed for everyone. It's a user-friendly and free application that caters to a broad audience, including:
    
1. **Students**: For taking quick notes during lectures or study sessions.
2. **Professionals**: For jotting down reminders, to-do lists, and important tasks.
3. **Creative Thinkers**: For brainstorming ideas, sketching, and visualizing thoughts.
4. **General Users**: For leaving digital notes on the virtual "fridge" or workspace.


### How Users Will Benefit

- **Ease of Use**: The app offers a straightforward and familiar interface, ensuring a low learning curve for users of all ages and technical backgrounds.

- **Organization**: Users can categorize and color-code notes, helping them stay organized and find information quickly.

- **Accessibility**: Being a web-based app, users can access their notes from any device with an internet connection, making it convenient for users on the go.

- **Collaboration (Future Feature)**: Future enhancements may include collaborative features, allowing users to share and work on notes with others.


### User Stories

1. **User Story 1: Creating a New Note**
   - As a user, I want to be able to easily create a new note with a title and content.
   - Acceptance Criteria:
     - There should be a button or option to create a new note.
     - I should be able to provide a title and content for the new note.
     - After creation, the note should be visible in my list of notes.

2. **User Story 3: Editing Notes**
   - As a user, I want to edit the content of my notes.
   - Acceptance Criteria:
     - I should be able to change the title of the note.
     - I should be able to change the text of the note.
     - It should show when the note was updated


### Functional Requirements

1. **User Account Management**:
   - Users can create accounts, log in.
   - Notes are associated with user accounts.

2. **Note Management**:
   - Users can create, edit, delete, and view notes.
   - Notes can have titles, content, and timestamps.

3. **Category Management**:
   - Users can create, edit, delete to notes.


### Non-Functional Requirements

1. **Performance**:
   - The app should load quickly and respond to user interactions without delays.

2. **Security**:
   - User data should be securely stored and protected.
   - Passwords should be hashed and salted for security.

3. **Scalability**:
   - The app should be able to handle a large number of users and notes efficiently.

4. **Accessibility**:
   - The app should be accessible to users with disabilities, following accessibility standards (e.g., WCAG).

5. **Cross-Platform Compatibility**:
   - The app should work on various web browsers and devices.

6. **Data Backup and Recovery**:
   - Regular data backups and a mechanism for data recovery in case of failures.

These updated requirements provide a solid foundation for developing and testing your Notes Master app, ensuring that it meets the needs of a broad user base and adheres to essential functional and non-functional criteria.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Link to Github
    https://github.com/maxadaniels/Capstone-Project.git

## Link to App 
 http://www.notes-master-app.co.za