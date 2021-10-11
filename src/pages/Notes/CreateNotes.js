import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import { useStyle } from "./CreateNotes.style";
import { useState } from "react";
import { Notes } from "./Notes";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../redux/actions/notes/notes.action";
import { GlowButton } from "../../Components/GlowButton";

export const CreateNotes = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('todos');
  
  const notes = useSelector(state => state.notesReducer);
  const dispatch = useDispatch();
  
  const classes = useStyle();
  
  const submit = e => {
    e.preventDefault();
    if (title && details) {
      dispatch(createNote({ title, details, category }));
    }
  };
  
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography variant="h4" color="textSecondary" gutterBottom className={classes.text}>
        Create new Notes
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={submit}>
        <TextField
          className={classes.field}
          onChange={e => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          error={!title}
        />
        
        <TextField
          onChange={e => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="primary"
          fullWidth
          required
          multiline
          rows={4}
          error={!details}
        />
        
        <FormControl className={classes.field}>
          <FormLabel component="h3" className={classes.text}>Note Category</FormLabel>
          <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
            <FormControlLabel className={classes.text} value="money" control={<Radio/>} label="Money"/>
            <FormControlLabel className={classes.text} value="todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel className={classes.text} value="reminders" control={<Radio/>} label="Reminders"/>
            <FormControlLabel className={classes.text} value="work" control={<Radio/>} label="Work"/>
          </RadioGroup>
        </FormControl>
        
        <GlowButton
          type="submit"
          text="Submit"/>
      </form>
      <Notes notes={notes}/>
    </Container>
  );
};
