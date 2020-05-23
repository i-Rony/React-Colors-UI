import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';
import styles from '../Styles/NavbarStyles';
import {withStyles} from '@material-ui/styles';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {format: "hex", open: false};
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    closeSnackbar(){
        this.setState({open: false});
    }

    render() {
        return (
            <header className={this.props.classes.Navbar}>
                <div className={this.props.classes.Logo}>
                    <Link to="/">Color UI</Link>
                </div>
                {this.props.slid && (
                    <div>
                        <span>Level: {this.props.level}</span>
                        <div className={this.props.classes.Slider}>
                            <Slider
                                defaultValue={this.props.level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={this.props.changeLevel}
                                railStyle={{
                                    height: 7
                                }}
                                trackStyle={{
                                    background: "none"
                                }}
                                handleStyle={{
                                    backgroundColor: "#ff7979",
                                    border: 0
                                }}
                                dotStyle={{
                                    outline: "none"
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className={this.props.classes.SelectContainer}>
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>                
                </div>

                <Snackbar
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={2500}
                    message={
                        <span id="message-id">
                            Format Changed To {this.state.format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{"aria-describedby": "message-id"}}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
                
            </header>
        );
    }
}

export default withStyles(styles)(Navbar);