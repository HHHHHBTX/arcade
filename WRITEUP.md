CS5610 — Project 2 Writeup
Project: 2048 and a Published Package
Student: Hang Liu
Estimated Time Spent: 20–30 hours
1. What went into the package and what stayed in the app? Describe one thing you were unsure about, and how you decided.
I separated my project into two parts: arcade-core, a reusable JavaScript library, and arcade, the SvelteKit application. The package contains the main 2048 board logic, including moving tiles, merging matching numbers, spawning new tiles, and checking whether moves are possible. It exports four functions: move(), spawn(), hasMoves(), and canMove(). I also used an internal helper named fuseQuartz to merge matching tiles correctly.

The SvelteKit application handles the user interface, keyboard interactions, score display, game controls, and reactive game state. One thing I was initially unsure about was where to put the game state and scoring logic. I decided to keep reusable board operations in the package while managing the current game state, score, and user interactions in the application. This separation makes the package easier to test independently and lets the application focus on presentation and user experience.
2. Since you needed to migrate Project 1 over, discuss the pros and cons of moving it over to Svelte versus keeping it as pure HTML/CSS.
Moving my Project 1 website into SvelteKit helped me organize the application into reusable components and separate routes. It also made navigation and future development easier because I could manage multiple pages within one consistent project structure. I preserved my original crossword, About, Contact, and landing pages while adding the new 2048 game.

However, migrating the website required additional work compared with keeping the original HTML and CSS files. I had to learn how SvelteKit organizes routes, how components are structured, and how to adapt existing markup to the framework. For simple static pages, plain HTML and CSS can be easier to understand and maintain. Overall, I think SvelteKit was a better long-term choice because the arcade can continue growing with more interactive games.
3. Now that you are juggling a library and an app, what can you do to make sure both are in sync?
Managing two separate projects taught me the importance of version control and dependency management. I published arcade-core to npm and installed it in the SvelteKit application as a package dependency instead of copying the library code directly into the app. This makes the relationship between the projects clearer and allows me to update the library independently.

To avoid breaking the application, I can run automated package tests before publishing a new version and test that version in the app before deployment. I can also use semantic versioning, maintain a CHANGELOG.md, and commit the app's lockfile so its installed dependency version is reproducible. For this project, I published versions 1.0.0 and 1.0.1; the later version added validation for invalid movement directions. Before future upgrades, I would check the package's exported API and rerun both the package tests and the application's checks.
4. What issues did you have learning Svelte? Do you feel like you mastered it, or are you still struggling with the concepts? Do you think it made this work any easier?
Svelte 5 was one of the more challenging parts of this project because it introduced several concepts that were new to me. At first, I found it difficult to understand how $state, $derived, and $props worked together, especially when deciding where reactive state should live. I also needed time to become familiar with SvelteKit's file-based routing system and communication between parent and child components.

I would not say that I have completely mastered Svelte yet, but I feel much more comfortable with it than when I started. Building the 2048 game helped me understand how reactive values can automatically update the interface when game state changes. I also learned how reusable components can make code more organized and easier to maintain.

Overall, I think Svelte made the interactive parts of the project easier once I understood the basic concepts. Instead of manually updating many DOM elements, I could focus on changing the underlying state and letting Svelte update the interface.
5. Given more time, what would you add?
If I had more time, I would add more polished tile movement animations so players could clearly see how tiles slide and merge. I would also consider adding a seeded random generator to make game sessions reproducible. These features would make the game more engaging and easier to test.

Another improvement would be expanding the arcade with additional puzzle games and a more detailed statistics system. For example, I could track the number of games played, the highest tile reached, and average scores over time. I would also continue improving the mobile experience and accessibility through additional testing.
6. How many hours did you spend?
I spent approximately 20–30 hours working on Project 2. This time included learning Svelte 5, migrating my Project 1 website, implementing the 2048 game, creating and testing the JavaScript package, and publishing it to npm. I also spent time debugging issues, improving the website design, setting up GitHub repositories, deploying the application to Vercel, and checking the finished website.
7. (Optional) What assumptions did you make about this assignment?
I assumed that the main goal of the assignment was not only to create a playable 2048 game but also to understand how to separate reusable logic from a web application's interface. I interpreted the published package as a standalone JavaScript module that should work independently of Svelte and the browser. I also assumed that maintaining the functionality of my Project 1 pages was important while improving their organization and integrating them into SvelteKit.
8. List any code, design, or packages you took from elsewhere, including use of AI.
I used SvelteKit and Svelte 5 as the main framework for the application, along with Node.js and npm for package development and testing. I referred to the original 2048 game as a reference for its basic rules and gameplay behavior. The application uses my published npm package, @hhhhhbtx/arcade-core, for its core 2048 board operations.

I also used ChatGPT as an AI-assisted learning and development tool during this project. ChatGPT helped me understand Svelte 5 concepts, troubleshoot errors, review JavaScript and Svelte code, and work through Git, npm publishing, and Vercel deployment steps. It also assisted with generating and revising portions of the code, improving the homepage design, and organizing the README documentation and this writeup. I reviewed suggested changes, tested the application locally, and verified the results through automated tests and browser testing.
Project Links
- Live Application: https://arcade-hhhhhbtx.vercel.app/
- Arcade Repository: https://github.com/HHHHHBTX/arcade
- Arcade Core Repository: https://github.com/HHHHHBTX/arcade-core
- Published npm Package: https://www.npmjs.com/package/@hhhhhbtx/arcade-core