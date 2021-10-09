import { Container, List, Typography } from "@material-ui/core";

export const Notes = ({ notes }) => {
  return (
    <Container>
      {notes.map(note =>
        <List key={note.id}>
          <h2>
            {note.title}
            <Typography variant="caption">{note.category}</Typography>
          </h2>
          <p>{note.details}</p>
        </List>
      )}
    </Container>
  );
};
