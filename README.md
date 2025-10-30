# NewsMonkey - A React News App

**NewsMonkey** is a dynamic news application built with **React.js** that fetches the latest top headlines from the [gnews.io](https://gnews.io/) API. It provides users with a clean, responsive, and intuitive interface to browse news by category, featuring infinite scrolling for a seamless reading experience.

---

## Features

- **Browse Top Headlines:** Instantly view the latest news as soon as you open the app.  
- **Filter by Category:** Switch easily between categories like Business, Technology, Sports, Health, and more.  
- **Infinite Scrolling:** Smoothly scroll through articles without needing to click “Next” or “Previous.”  
- **Live Data:** All content is fetched in real time from the **gnews.io** API.  
- **Top Loading Bar:** A slim progress bar indicates when new content is being loaded.  
- **Responsive Design:** Fully optimized for both desktop and mobile devices.  
- **Modern "About Us" Page:** Includes a professional two-column layout for team or project info.  

---

## Technologies Used

- **React.js** – Core framework for building the UI  
- **React Router** – Handles client-side routing  
- **gnews.io API** – Provides live news data  
- **Bootstrap** – Ensures responsive design and consistent styling  
- **react-infinite-scroll-component** – Powers infinite scrolling functionality  
- **react-top-loading-bar** – Displays the progress/loading indicator  

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.

### Setup Instructions

Run the following commands one by one in your terminal:

```bash
git clone https://github.com/Sahanabl26/newsapp.git
cd newsapp
npm install

# Set up your environment variables (important step)
# 1. Get your free API key from https://gnews.io/
# 2. In the root directory (same level as package.json), create a new file named .env
# 3. Add your API key like this:
# 4. REACT_APP_NEWS_API=your_gnews_io_api_key_goes_here

# Finally, start the application
npm start
