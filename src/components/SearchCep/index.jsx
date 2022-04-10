import { TextField, Button } from '@material-ui/core'
import useStyles from './style';

function SearchCep({searchcep, SetSearchCep, handleRequestApi}) {

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
                onClick={handleRequestApi}>
                buscar
            </Button>
        </div>
    )

}

export default SearchCep;