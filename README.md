
# Cognisite Construction Project Management App

## Overview

This MERN stack application helps users calculate construction parameters for a compound and visualize the construction schedule with a Gantt chart.

## Features

- Input construction parameters and calculate metrics.
- View results including perimeter, days required, and end date.
- Display a Gantt chart showing daily work progress.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
     https://github.com/kundan761/Cognisite.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   MONGO_URI=your_mongodb_connection_for _your _local_system
   PORT=8080
   ```

5. **Start the application:**

   ```bash
   npm start
   ```

## Usage

1. **Navigate to the Home page**: Enter construction parameters and submit the form.
2. **View Results**: Results and the Gantt chart will be displayed on the `/result` page.

## Deployment

[Click here to view the frontend of deployed application](https://cognisite-zeta.vercel.app/)

[Click here to view the backend of deployed application](https://cognisite-ichw.onrender.com/api/result)

## License

This project is licensed under the MIT License.

