import React from 'react';
import styles from '../Styles/PaletteFooterStyles';
import {withStyles} from '@material-ui/styles';

function PaletteFooter(props) {
    return (
        <footer className={props.classes.Footer}>
            {props.paletteName}
            <span className={props.classes.Emoji}>
                {props.emoji}
            </span>
        </footer>
    );
}

export default withStyles(styles)(PaletteFooter);