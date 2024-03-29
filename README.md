# nology-FakeOS-minhanthonytat
![FakeOS](https://github.com/callmepho/nology-FakeOS-minhanthonytat/assets/47295382/5cd3df38-1aa0-43d8-9d89-854882b723ee)
# Project: FakeOS

## Overview

The goal of this project is to have students explore and consolidate their understandings of HTML, CSS and JavaScript.
This project will require you to replicate the layout and format of a design/image using CSS, add content via HTML and control the interactive elements via JavaScript.\

### The design is going to be that of an operating system.

Please look at the provided image gallery for examples.
You should choose either a portrait (mobile) or landscape (desktop) operating system, you are not expected to create a responsive page that works on both, however it should look good on the chosen orientation at different resolutions/ratios.
You will select one of the provided images, or your own as approved by a coach.

### Features

- You will be creating an SPA (Single Page Application)
- Desktop has a wallpaper that fits the viewport
- There will be selectable icons
- Selecting an icon will open an "app", creating a _modal_ to display some content
- Able to close an app
- There will be a selectable menu
- Selecting the menu will display a list of text and icons
- The current time is displayed somewhere

## MVP:

### HTML/SCSS

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form

### JavaScript

- Put your js code into separate files
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

### Github

- Create a repo on github with a README
- Add your coach as a contributor to the repo
- Create and checkout develop branch
- Push all changes to your develop branch
- When submitting create a pull request from develop into main for review
- Add coach as a reviewer

## Hints

- Split your js logic/data modules from your js DOM modules
- Look at the position css property, specifically _fixed_ and _absolute_
- May need to investigate Z index
- Pay attention to your hierarchy of elements in your html
- Create your modals using JS and DOM interaction
- Make your life easy! You don't need to recreate everything, just do the features and mvp mentioned above

### Useful Resources:

- [Cutting a Monster Project Down to a Manageable Size](https://www.informit.com/articles/article.aspx?p=2153472)

- [Is Your Code DRY or WET?](https://dzone.com/articles/is-your-code-dry-or-wet#:~:text=DRY%20code%20is%20a%20software,t%20adhere%20to%20DRY%20principle.)
- [What are Pure Functions and Side Effects in JavaScript?](https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript)
