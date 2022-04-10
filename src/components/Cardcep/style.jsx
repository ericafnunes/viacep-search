import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: 'auto',
  },
  media: {
    height: 'auto',
    width: '100%'
  },
  cardHeader: {
    textAlign: 'center',
  },
  direction:{
    display: 'flex',
    flexDirection: 'column',
    listStyleType :'none',
  },
  marginRight:{
    marginRight:'30px',
    listStyleType :'none',
  }
}));