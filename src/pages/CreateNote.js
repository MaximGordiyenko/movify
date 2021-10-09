import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useStyle } from "./Create.style";
import { useState } from "react";
import { Notes } from "./Notes";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../redux/actions/notes/notes.action";

export const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('todos');
  
  const notes = useSelector(state => state.notesReducer)
  const dispatch = useDispatch();
  
  const classes = useStyle();
  
  const submit = e => {
    e.preventDefault();
    if (title && details) {
      dispatch(createNote({ title, details, category }))
    }
  };
  
  return (
    <Container>
      <Typography variant="h4" color="textSecondary" gutterBottom>
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
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={!details}
        />
        
        <FormControl className={classes.field}>
          <FormLabel component='h3'>Note Category</FormLabel>
          <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
          </RadioGroup>
        </FormControl>
        
        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Click
        </Button>
      </form>
    <Notes notes={notes}/>
    </Container>
  );
};
