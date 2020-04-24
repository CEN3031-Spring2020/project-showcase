import React, {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import {createStyles} from "@material-ui/core";

function MenuItem({semester: semesters}) {
    const classes = useInnerStyles();
    const [open, setOpen] = useState(false);

    const [projs, setProjects] = useState({});
    useEffect(() => {
        const projs = {};
        semesters.projects.forEach(curr => {
            if (projs[curr["project-name"]])
                projs[curr['project-name']].push(curr);
            else
                projs[curr['project-name']] = [curr];
        });
        setProjects(projs);
    }, []);

    function handleClick() {
        setOpen(!open);
    }

    return (
        <div>
            <ListItem button onClick={handleClick} className={classes.menuItem}>
                <ListItemIcon className={classes.menuItemIcon}>
                    <IconLibraryBooks/>
                </ListItemIcon>
                <ListItemText primary={semesters.semester}/>
                {open ? <IconExpandLess/> : <IconExpandMore/>}
            </ListItem>
            {
                semesters.projects.length > 0 ?
                    generateCollapseMenus(projs, classes, open, semesters.semester) : null
            }
        </div>
    )
}

function generateCollapseMenus(projects, classes, open, semester) {
    return (
        <div>
            {
                Object.keys(projects).map(project => {
                    return <Collapse in={open} timeout="auto" unmountOnExit>
                        <Divider/>
                        <List component="div" disablePadding>
                            <ListItem button component='a' href={'#' + semester + project} className={classes.content}>
                                <ListItemText inset primary={project}/>
                            </ListItem>
                        </List>
                    </Collapse>
                })
            }

        </div>
    )
}

function Menu({items}) {
    const classes = useStyles();
    return <List component="nav" className={classes.appMenu} disablePadding>
        {
            items.semesters.map(semester => <MenuItem semester={semester}/>)
        }
    </List>;
}

function Sidebar({items}) {
    const classes = useStyles();
    return (
        <div className="h-full sticky top-0">
            <CssBaseline/>
            <Drawer className="h-full sticky top-0" variant='permanent' classes={{
                paper: classes.drawerPaper,
            }}>
                <Menu className="h-full sticky top-0" items={items}/>
            </Drawer>
        </div>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#2C2F33',
        color: '#fff',
        overflow: 'hidden',
        height: '100vh'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        overflow: 'hidden'
    },
}));

const useInnerStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
            overflow: 'hidden'
        },
        navList: {
            width: drawerWidth,
            overflow: 'hidden'

        },
        menuItem: {
            width: drawerWidth,
            overflow: 'hidden'
        },
        menuItemIcon: {
            color: '#09d3ac',
            overflow: 'hidden'
        },
    }),
);

export default Sidebar;
