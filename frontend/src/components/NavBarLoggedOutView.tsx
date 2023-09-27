import { Button } from "react-bootstrap";

// Define the props for the NavBarLoggedOutView component
interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

// Create the NavBarLoggedOutView component
const NavBarLoggedOutView = ({ onSignUpClicked, onLoginClicked }: NavBarLoggedOutViewProps) => {
    return (
        <>
            {/* Render a "Sign Up" button that triggers the onSignUpClicked function */}
            <Button onClick={onSignUpClicked}>Sign Up</Button>
            {/* Render a "Log In" button that triggers the onLoginClicked function */}
            <Button onClick={onLoginClicked}>Log In</Button>
        </>
    );
}

export default NavBarLoggedOutView;
