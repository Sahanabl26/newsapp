# NewsMonkey - A React News App

NewsMonkey is a dynamic news application built with React.js. It fetches the latest top headlines from the [gnews.io](https://gnews.io/) API and displays them in a clean, user-friendly interface. Users can browse news by category and enjoy a seamless infinite scrolling experience.

![NewsMonkey App Screenshot](src/assets/about-image.jpg)

*(You can replace the image path above if you have a better screenshot of the app's homepage)*

---

## Features

* **Browse Top Headlines:** Get the latest news as soon as you open the app.
* **Filter by Category:** Easily switch between categories like Business, Technology, Sports, Health, and more.
* **Infinite Scrolling:** Seamlessly scroll through all articles without needing to click "Next" or "Previous."
* **Live Data:** All news is fetched in real-time from the gnews.io API.
* **Top Loading Bar:** A slim progress bar at the top of the page shows when new content is being loaded.
* **Responsive Design:** Looks great on both desktop and mobile devices.
* **Modern "About Us" Page:** A professional, two-column "About Us" page.

---

## Technologies Used

* **React.js:** The core JavaScript library for building the user interface.
* **React Router:** For handling client-side routing and navigation between pages.
* **gnews.io API:** Used to fetch all news articles and data.
* **Bootstrap:** For responsive design and pre-built UI components.
* **`react-infinite-scroll-component`:** For the infinite scroll feature.
* **`react-top-loading-bar`:** For the progress bar.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and `npm` installed on your computer.

### 1. Clone the Repository

Clone your GitHub repository to your local machine.

git clone [https://github.com/Sahanabl26/newsapp.git](https://github.com/Sahanabl26/newsapp.git)

2. Navigate to the Directory
Bash

cd newsapp
3. Install Dependencies
Install all the required npm packages.

Bash

npm install
4. Set Up Your Environment File (Most Important Step!)
This project requires an API key from gnews.io to fetch news.

Get your free API key from gnews.io.

In the root of the project folder (the same level as package.json), create a new file named .env.

Open the .env file and add your API key like this:

REACT_APP_NEWS_API=your_gnews_io_api_key_goes_here
5. Run the Application
Start the local development server.

Bash

npm start
Open http://localhost:3000 to view the app in your browser.
