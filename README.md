# Expense Tracker - Backend

This is the backend application for the Expense Tracker project, built using Node.js and Express.js. It provides RESTful APIs to handle CRUD operations for transactions and connects to a MongoDB Atlas database for data storage.

## Features
- Fetch all transactions
- Add new transactions
- Delete transactions by ID
- MongoDB Atlas integration
- Deployed using Render

## Tech Stack
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose (ODM)

## Installation and Setup  

1. Clone the repository:
   ```bash
   git clone https://github.com/sivakarthikxo/ExpenseTracker-backend.git
   cd backend
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file:
   ```plaintext
   PORT=5000
   MONGO_URI=<your_mongo_uri>
   ```
   Replace <your_mongo_uri> with the connection string from MongoDB Atlas. (e.g., mongodb+srv://<db_username>:<db_password>@expense-tracker.pz42p.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker).

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Verify the server is running:
   ```  
   http://localhost:5000
   ```
   
## API Endpoints:  

   | Method | Endpoint               | Description                     |
   |--------|------------------------|---------------------------------|
   | GET    | `/api/transactions`    | Fetch all transactions          |
   | POST   | `/api/transactions`    | Add a new transaction           |
   | DELETE | `/api/transactions/:id`| Delete a transaction by ID      |


## Deployment  

The backend is deployed on **Render**.  
To deploy:
  - Push changes to GitHub.
  - Connect the repository to Render.
  - Add environment variables in Render settings:
      - MONGO_URI pointing to your MongoDB Atlas connection string.  
      - PORT set to 5000.
  - Render will automatically detect the build and deploy the service.

Once deployed, you can use the backend API URL (e.g., https://expense-tracker-backend-cge7.onrender.com) in the frontend's .env file.

## Frontend  

For **Expense Tracker - Frontend**.  

Visit:  
  - https://github.com/sivakarthikxo/ExpenseTracker-frontend
