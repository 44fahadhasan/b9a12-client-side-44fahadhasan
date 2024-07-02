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
     
2. Install dependencies::
   - cd b9a12-client-side-44fahadhasan && npm install
   - cd b9a12-server-side-44fahadhasan && npm install
     
4. Set up Firebase:
   - Go to Firebase Console, create a project, and generate a private key.
   
5. Set up Environment Variables:
   - reate .env files in both directories with Firebase and MongoDB credentials.
   
7. Run the server:
   - cd b9a12-server-side-44fahadhasan && npm run dev
     
8. Run the client:
   - cd b9a12-client-side-44fahadhasan && npm run dev
     
8. Access the app:
   - Visit `http://localhost:3000`
