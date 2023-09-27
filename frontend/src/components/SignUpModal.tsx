import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import { useState } from 'react';
import { ConflictError } from "../errors/http_errors";

// Define the SignUpModalProps interface for the component's props
interface SignUpModalProps {
    onDismiss: () => void,
    onSignUpSuccessful: (user: User) => void,
}

// Create the SignUpModal component
const SignUpModal = ({ onDismiss, onSignUpSuccessful }: SignUpModalProps) => {
    // Initialize state to manage error messages
    const [errorText, setErrorText] = useState<string | null>(null);

    // Initialize React Hook Form to manage form state
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

    // Function to handle form submission
    async function onSubmit(credentials: SignUpCredentials) {
        try {
            // Call the sign-up API to create a new user
            const newUser = await NotesApi.signUp(credentials);
            // Call the onSignUpSuccessful callback with the newly created user
            onSignUpSuccessful(newUser);
        } catch (error) {
            if (error instanceof ConflictError) {
                // Set the error message for conflict errors (e.g., duplicate username or email)
                setErrorText(error.message);
            } else {
                alert(error); // Display an alert for other errors
            }
            console.error(error);
        }
    }

    return (
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Sign Up
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
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
                    {/* Render a text input field for the email */}
                    <TextInputField
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.email}
                    />
                    {/* Render a text input field for the password */}
                    <TextInputField
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.password}
                    />
                    {/* Render the "Sign Up" button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={styleUtils.width100}>
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default SignUpModal;
