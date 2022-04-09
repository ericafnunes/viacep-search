import { TextField, Button } from '@material-ui/core'
import Results from '../Results';
import useStyles from './style';

function SearchCep() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField 
                className={classes.textinput}
                label="digitar cep"
                onChange={e => (e.target.value)}
                variant="outlined"
            />
            <Button
                className={classes.button}
                variant="contained">
                buscar
            </Button>
        </div>
    )

}

export default SearchCep;