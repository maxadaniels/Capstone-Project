import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from './models/user';
import * as NotesApi from "./network/notes_api";
import NotesPage from './pages/NotesPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';
import styles from "./styles/App.module.css";

function App() {
    // State to store the currently logged-in user
	const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

	// State to control the visibility of the sign-up modal
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	// State to control the visibility of the login modal
	const [showLoginModal, setShowLoginModal] = useState(false);

    // Fetch the logged-in user when the app loads
	useEffect(() => {
		async function fetchLoggedInUser() {
			try {
				const user = await NotesApi.getLoggedInUser();
				setLoggedInUser(user);
			} catch (error) {
				console.error(error);
			}
		}
		fetchLoggedInUser();
	}, []);

	return (
		<BrowserRouter>
			<div>
				{/* Navigation bar component */}
				<NavBar
					loggedInUser={loggedInUser}
					onLoginClicked={() => setShowLoginModal(true)}
					onSignUpClicked={() => setShowSignUpModal(true)}
					onLogoutSuccessful={() => setLoggedInUser(null)}
				/>
				{/* Main content container */}
				<Container className={styles.pageContainer}>
					<Routes>
						{/* Route for the home page (NotesPage) */}
						<Route
							path='/'
							element={<NotesPage loggedInUser={loggedInUser} />}
						/>
						{/* Route for the privacy page */}
						<Route
							path='/privacy'
							element={<PrivacyPage />}
						/>
						{/* Route for any other unknown paths (404 NotFoundPage) */}
						<Route
							path='/*'
							element={<NotFoundPage />}
						/>
					</Routes>
				</Container>
				{/* Sign-up modal */}
				{showSignUpModal &&
					<SignUpModal
						onDismiss={() => setShowSignUpModal(false)}
						onSignUpSuccessful={(user) => {
							setLoggedInUser(user);
							setShowSignUpModal(false);
						}}
					/>
				}
				{/* Login modal */}
				{showLoginModal &&
					<LoginModal
						onDismiss={() => setShowLoginModal(false)}
						onLoginSuccessful={(user) => {
							setLoggedInUser(user);
							setShowLoginModal(false);
						}}
					/>
				}
			</div>
		</BrowserRouter>
	);
}

export default App;
