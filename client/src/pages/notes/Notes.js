import { Container, List, Typography } from "@material-ui/core";
import { GlowButton } from "../../components/glowButton/GlowButton";
import { useStyle } from "./CreateNotes.style";

export const Notes = ({ notes, onClick }) => {
  const classes = useStyle();
  
  return (
    <Container>
      {notes.map(note =>
        <List key={note.id}>
          <h2 className={classes.text}>
            {note.title}
            <Typography variant="caption" color='primary'>{note.category}</Typography>
          </h2>
          <Typography variant='body1' className={classes.text}>{note.details}</Typography>
          <GlowButton type='button' text='delete' onClick={onClick}/>
        </List>
      )}
    </Container>
  );
};