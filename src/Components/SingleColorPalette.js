import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';
import styles from '../Styles/PaletteStyles';
import {withStyles} from '@material-ui/styles';

class SingleColorPalette extends Component {

    constructor(props){
        super(props);
        this.state = {format: "hex"};
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colorFilter){
        let shades = [];
        let allColors = palette.colors;
        
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilter)
            );
        }

        return shades.slice(1);
    }

    changeFormat(val){
        this.setState({format: val});
    }

    render() {

        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[this.state.format]}
                showLink={false}    
            />
        ))

        return (
            <div className={this.props.classes.Palette}>
                <Navbar 
                    handleChange={this.changeFormat}
                    slid={false}
                />
                <div className={this.props.classes.PaletteColors}>
                    {colorBoxes}
                    <div className={this.props.classes.goBack}>
                        <Link to={`/palette/${this.props.palette.id}`}>
                            GO BACK
                        </Link>
                    </div>
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>                
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);