import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LoginCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import { useState } from 'react';
import { UnauthorizedError } from "../errors/http_errors";

// Define the props for the LoginModal component
interface LoginModalProps {
    onDismiss: () => void,
    onLoginSuccessful: (user: User) => void,
}

// Create the LoginModal component
const LoginModal = ({ onDismiss, onLoginSuccessful }: LoginModalProps) => {
    // Initialize state to manage error text
    const [errorText, setErrorText] = useState<string | null>(null);

    // Initialize the useForm hook to manage form state
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginCredentials>();

    // Handle form submission
    async function onSubmit(credentials: LoginCredentials) {
        try {
            // Attempt to log in using the provided credentials
            const user = await NotesApi.login(credentials);
            // Call the onLoginSuccessful callback with the authenticated user
            onLoginSuccessful(user);
        } catch (error) {
            // Handle login errors
            if (error instanceof UnauthorizedError) {
                setErrorText(error.message);
            } else {
                alert(error); // Display a generic alert for other errors
            }
            console.error(error);
        }
    }

    return (
        // Create a modal dialog for user login
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Log In
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/* Display an error alert if errorText is not null */}
                {errorText &&
                    <Alert variant="danger">
                        {errorText}
                    </Alert>
                }
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/* Render a text input field for the username */}
                    <TextInputField
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Username"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.username}
                    />
                    {/* Render a password input field for the password */}
                    <TextInputField
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.password}
                    />
                    {/* Render a "Log In" button that submits the form */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={styleUtils.width100}>
                        Log In
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;
