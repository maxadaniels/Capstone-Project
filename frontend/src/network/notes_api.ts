import { ConflictError, UnauthorizedError } from "../errors/http_errors";
import { Note } from "../models/note";
import { User } from "../models/user";

// Helper function to handle fetch requests and handle errors
async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorBody = await response.json();
        const errorMessage = errorBody.error;
        if (response.status === 401) {
            throw new UnauthorizedError(errorMessage);
        } else if (response.status === 409) {
            throw new ConflictError(errorMessage);
        } else {
            throw Error("Request failed with status: " + response.status + " message: " + errorMessage);
        }
    }
}

// Function to get the logged-in user
export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("/api/users", { method: "GET" });
    return response.json();
}

// Interface for sign-up credentials
export interface SignUpCredentials {
    username: string,
    email: string,
    password: string,
}

// Function to sign up a new user
export async function signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await fetchData("/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// Interface for login credentials
export interface LoginCredentials {
    username: string,
    password: string,
}

// Function to log in a user
export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// Function to log out the user
export async function logout() {
    await fetchData("/api/users/logout", { method: "POST" });
}

// Function to fetch notes
export async function fetchNotes(): Promise<Note[]> {
    const response = await fetchData("/api/notes", { method: "GET" });
    return response.json();
}

// Interface for note input
export interface NoteInput {
    title: string,
    text?: string,
}

// Function to create a new note
export async function createNote(note: NoteInput): Promise<Note> {
    const response = await fetchData("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
    return response.json();
}

// Function to update an existing note
export async function updateNote(noteId: string, note: NoteInput): Promise<Note> {
    const response = await fetchData("/api/notes/" + noteId, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    });
    return response.json();
}

// Function to delete a note
export async function deleteNote(noteId: string) {
    await fetchData("/api/notes/" + noteId, { method: "DELETE" });
}
