import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";

// Define the props for the NavBarLoggedInView component
interface NavBarLoggedInViewProps {
    user: User,
    onLogoutSuccessful: () => void,
}

// Create the NavBarLoggedInView component
const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {
    // Handle user logout
    async function logout() {
        try {
            // Call the logout API to log the user out
            await NotesApi.logout();
            // Call the onLogoutSuccessful callback after successful logout
            onLogoutSuccessful();
        } catch (error) {
            console.error(error);
            alert(error); // Display an alert for any errors during logout
        }
    }

    return (
        <>
            {/* Display the signed-in user's username */}
            <Navbar.Text className="me-2">
                Signed in as: {user.username}
            </Navbar.Text>
            {/* Render a "Log out" button that triggers the logout function */}
            <Button onClick={logout}>Log out</Button>
        </>
    );
}

export default NavBarLoggedInView;
