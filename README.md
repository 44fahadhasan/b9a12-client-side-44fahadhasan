## Newspaper Website Project

## overview
The newspaper website project provides a platform for both normal and premium users to access news articles. Users can subscribe to premium content using integrated payment methods. The admin dashboard facilitates user and content management, ensuring smooth operation.

## Key Features

## User Roles
- Normal Users: Access to free news content.
- Premium Users: Access to exclusive premium news content upon subscription.

## Subscription System
- Users can upgrade to premium membership using integrated payment methods.

## Admin Dashboard
- Manage users: creation, deletion, and updating profiles.
- Manage news content: creation, deletion, and updating posts for both premium and normal sections.

## Technologies Used
- Frontend: React.js, Tailwind css 
- Backend: Node.js, Express.js
- Database: MongoDB
- Payment Gateway Integration: Stripe

## Getting Started

To run this project locally:

1. Clone the repository :
   - [client](https://github.com/44fahadhasan/b9a12-client-side-44fahadhasan)
   - [server](https://github.com/44fahadhasan/b9a12-server-side-44fahadhasan)
3. Install the dependencies:
   - Navigate to the `b9a12-client-side-44fahadhasan` directory and run `npm install`.
   - Navigate to the `b9a12-server-side-44fahadhasan` directory and run `npm install`.
4. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Go to the project settings or service accounts section.
   - Click on "Generate new private key" or a similar option.
   
5. Set up Environment Variables:
   - In the `b9a12-client-side-44fahadhasan` directory, create a new file named `.env` based on the `.env.local` file.
   - Update the values of the environment variables in the `.env` file with your Firebase configuration details.
   - In the `b9a12-server-side-44fahadhasan` directory, create a new file named `.env` based on the `.env` file.
   - Update the values of the environment variables in the `.env` file according to your preferences. For example, set the `PORT` variable to specify the desired port for the server and set `MONGO_URI` to your MongoDB connection URI.
6. Run the server:
   - Navigate to the `b9a12-server-side-44fahadhasan` directory and run `npm run dev`.
7. Run the client:
   - Navigate to the `b9a12-client-side-44fahadhasan` directory and run `npm run dev`.
8. The application will be accessible at `http://localhost:3000`.
