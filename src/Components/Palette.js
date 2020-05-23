import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from '../Styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';

class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.changeLevel = this.changeLevel.bind(this); 
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {

        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox
                background={color[this.state.format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={this.props.palette.id}
                showLink={true}
            />
        ));

        return (
            <div className={this.props.classes.Palette}>
                <Navbar
                    level={this.state.level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    slid={true}
                />
                <div className={this.props.classes.PaletteColors}>
                    {colorBoxes}    
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(Palette);