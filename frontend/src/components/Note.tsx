import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";
import { MdDelete } from "react-icons/md";

// Define the props for the Note component
interface NoteProps {
    note: NoteModel,
    onNoteClicked: (note: NoteModel) => void,
    onDeleteNoteClicked: (note: NoteModel) => void,
    className?: string,
}

// Create the Note component
const Note = ({ note, onNoteClicked, onDeleteNoteClicked, className }: NoteProps) => {
    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note;

    // Determine whether the note has been updated and format the created/updated text accordingly
    let createdUpdatedText: string;
    if (updatedAt > createdAt) {
        createdUpdatedText = "Updated: " + formatDate(updatedAt);
    } else {
        createdUpdatedText = "Created: " + formatDate(createdAt);
    }

    return (
        // Render a Bootstrap Card for the note
        <Card
            className={`${styles.noteCard} ${className}`}
            onClick={() => onNoteClicked(note)}>
            {/* Card Body */}
            <Card.Body className={styles.cardBody}>
                {/* Display the note title */}
                <Card.Title className={styleUtils.flexCenter}>
                    {title}
                    {/* Render a delete icon that triggers onDeleteNoteClicked */}
                    <MdDelete
                        className="text-muted ms-auto"
                        onClick={(e) => {
                            onDeleteNoteClicked(note);
                            e.stopPropagation();
                        }}
                    />
                </Card.Title>
                {/* Display the note text */}
                <Card.Text className={styles.cardText}>
                    {text}
                </Card.Text>
            </Card.Body>
            {/* Card Footer */}
            <Card.Footer className="text-muted">
                {/* Display the created/updated text */}
                {createdUpdatedText}
            </Card.Footer>
        </Card>
    )
}

export default Note;
