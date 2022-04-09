import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 300,
            height: 100,        
        },
        textinput:{
            textTransform: 'uppercase',
            textAlign: 'center',
            display: 'flex',
        },
        button: {
            width: 'auto',
            marginTop: 10,
            backgroundColor: '#FFD400;',
            color: 'black',
        },
        
    }
))