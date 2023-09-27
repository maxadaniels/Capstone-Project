import { useEffect, useState } from 'react';
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Note as NoteModel } from '../models/note';
import * as NotesApi from "../network/notes_api";
import styles from "../styles/NotesPage.module.css";
import styleUtils from "../styles/utils.module.css";
import AddEditNoteDialog from "./AddEditNoteDialog";
import Note from './Note';

// Define the NotesPageLoggedInView component
const NotesPageLoggedInView = () => {
    // Initialize state to manage notes, loading state, and error state
    const [notes, setNotes] = useState<NoteModel[]>([]);
    const [notesLoading, setNotesLoading] = useState(true);
    const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);

    // Initialize state to manage the Add/Edit Note dialog
    const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
    const [noteToEdit, setNoteToEdit] = useState<NoteModel | null>(null);

    // Use useEffect to load notes when the component mounts
    useEffect(() => {
        async function loadNotes() {
            try {
                setShowNotesLoadingError(false);
                setNotesLoading(true);
                const notes = await NotesApi.fetchNotes();
                setNotes(notes);
            } catch (error) {
                console.error(error);
                setShowNotesLoadingError(true);
            } finally {
                setNotesLoading(false);
            }
        }
        loadNotes();
    }, []);

    // Function to delete a note
    async function deleteNote(note: NoteModel) {
        try {
            await NotesApi.deleteNote(note._id);
            // Remove the deleted note from the list of notes
            setNotes(notes.filter(existingNote => existingNote._id !== note._id));
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    // Render the grid of notes
    const notesGrid =
        <Row xs={1} md={2} xl={3} className={`g-4 ${styles.notesGrid}`}>
            {notes.map(note => (
                <Col key={note._id}>
                    <Note
                        note={note}
                        className={styles.note}
                        onNoteClicked={setNoteToEdit}
                        onDeleteNoteClicked={deleteNote}
                    />
                </Col>
            ))}
        </Row>;

    return (
        <>
            {/* Render a button to add a new note */}
            <Button
                className={`mb-4 ${styleUtils.blockCenter} ${styleUtils.flexCenter}`}
                onClick={() => setShowAddNoteDialog(true)}>
                <FaPlus />
                Add new note
            </Button>
            {/* Display a loading spinner while notes are being fetched */}
            {notesLoading && <Spinner animation='border' variant='primary' />}
            {/* Display an error message if notes loading fails */}
            {showNotesLoadingError && <p>Something went wrong. Please refresh the page.</p>}
            {/* Display notes grid if notes are loaded successfully */}
            {!notesLoading && !showNotesLoadingError &&
                <>
                    {notes.length > 0
                        ? notesGrid
                        : <p>You don't have any notes yet</p>
                    }
                </>
            }
            {/* Display the Add/Edit Note dialog when showAddNoteDialog is true */}
            {showAddNoteDialog &&
                <AddEditNoteDialog
                    onDismiss={() => setShowAddNoteDialog(false)}
                    onNoteSaved={(newNote) => {
                        // Add the newly created note to the list of notes
                        setNotes([...notes, newNote]);
                        setShowAddNoteDialog(false);
                    }}
                />
            }
            {/* Display the Edit Note dialog when noteToEdit is not null */}
            {noteToEdit &&
                <AddEditNoteDialog
                    noteToEdit={noteToEdit}
                    onDismiss={() => setNoteToEdit(null)}
                    onNoteSaved={(updatedNote) => {
                        // Update the edited note in the list of notes
                        setNotes(notes.map(existingNote => existingNote._id === updatedNote._id ? updatedNote : existingNote));
                        setNoteToEdit(null);
                    }}
                />
            }
        </>
    );
}

export default NotesPageLoggedInView;
