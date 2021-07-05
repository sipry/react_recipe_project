import { makeStyles } from '@material-ui/core/styles';
// import useWindowPosition from '../hook/useWindowPosition';
// import { ContactsOutlined } from '@material-ui/icons';
// import { width } from '@material-ui/system';
import MenuCard from './MenuCard';

const useStyles = makeStyles((theme) => ({
    root: {
        minheight: "100vh",
        margin: "30px;",
        
    },
    row:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down('md')]:{
            flexDirection: "column"
        }
    }
}));
// eslint-disable-next-line
export default function(){
    const classes = useStyles();
    // eslint-disable-next-line
    // const cheked = useWindowPosition("header");
    return (
    <div className={classes.root} id="Menupage">
        <div className={classes.row}>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/> 
        </div>
        <div className={classes.row}>
        <MenuCard/>
        <MenuCard/> 
        <MenuCard/>   
        </div>
    </div>
    );
}
