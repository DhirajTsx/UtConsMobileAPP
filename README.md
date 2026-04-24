# UtCons Full Stack WebApp (React Native + Node.js)

## Project Overview
This project is a full-stack mobile application featuring an onboarding flow, secure user authentication, and profile management. It is built using **React Native** for the frontend and **Node.js/Express.js** with **MongoDB** for the backend.

### Project Structure
- **`/Backend`**: Contains the Node.js/Express.js server, MongoDB connection logic, and JWT-based authentication API.
- **`/Frontend`**: Contains the React Native application using Expo, featuring React Navigation and Async Storage for secure token management.

---

## 🛠️ Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and add your MongoDB URI and JWT Secret:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. **API Configuration:** The API base URL is configured in `Frontend/src/api/axiosConfig.js`. Update it to point to your live backend or local backend.
4. Start the React Native Expo app:
   ```bash
   npx expo start
   ```

---

## 🔐 API Flow & Authentication

1. **User Registration (`POST /api/auth/register`)**:
   - The user submits their `name`, `email`, and `password`.
   - The backend validates the data, hashes the password using bcrypt, and stores the user in MongoDB.
2. **User Login (`POST /api/auth/login`)**:
   - The user submits their `email` and `password`.
   - The backend verifies the credentials and returns a secure JWT token.
   - The React Native app stores this token securely using `AsyncStorage`.
3. **Protected Route (`GET /api/auth/profile`)**:
   - The frontend sends the stored JWT token in the `Authorization` header (`Bearer <token>`).
   - The backend validates the token using auth middleware and returns the user's profile data.
4. **App Navigation**:
   - **Onboarding Screens**: Shown only on the first launch (tracked via `AsyncStorage`).
   - **Auth Stack**: Users without a token are shown the Login/Signup screens.
   - **Main Stack**: Authenticated users are navigated directly to the Home screen.

---

## 🔑 Demo Credentials
- **Email:** testuser@example.com
- **Password:** password123

*(You can also register a new account through the Signup screen).*

---

## 📱 APK Build
To generate the production APK build without needing Android Studio or Java installed locally, you can use Expo EAS (Expo Application Services).

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Log in to your Expo account:
   ```bash
   eas login
   ```
3. Run the following command inside the `Frontend` directory to generate the APK:
   ```bash
   eas build -p android --profile preview
   ```
4. Once the build is complete, Expo will provide a download link for the `.apk` file. Download it and include it in your submission!
