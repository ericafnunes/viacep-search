import { TextField, Button } from '@material-ui/core'
import useStyles from './style';

function SearchCep({searchcep, SetSearchCep, handleFindCep}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField 
                className={classes.textinput}
                label="digitar cep"
                value={searchcep}
                onChange={e => SetSearchCep(e.target.value)}
                variant="outlined"
            />
            <Button
                className={classes.button}
                variant="contained"
                onClick={handleFindCep}>
                buscar
            </Button>
        </div>
    )

}

export default SearchCep;