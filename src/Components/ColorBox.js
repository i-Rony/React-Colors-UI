import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from '../Styles/ColorBoxStyles';
import {withStyles} from '@material-ui/styles';

class ColorBox extends Component {

    constructor(props){
        super(props);
        this.state = { copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }

    render() {

        return (
            <CopyToClipboard
                text={this.props.background}
                onCopy={this.changeCopyState}
            >
                <div
                    style={{background: this.props.background}}
                    className={this.props.classes.ColorBox}
                >
                    <div
                        style={{background: this.props.background}}
                        className={
                            `${this.props.classes.copyOverlay} 
                            ${this.state.copied && this.props.classes.showOverlay}`
                        }
                    />
                    <div className={
                        `${this.props.classes.copyMessage} 
                        ${this.state.copied && this.props.classes.showMessage}`
                    }>
                        <h1>Copied!</h1>
                        <p className={this.props.classes.copyText}>
                            {this.props.background}
                        </p>
                    </div>
                    <div>
                        <div className={this.props.classes.boxContent}>
                            <span className={this.props.classes.colorName}>{this.props.name}</span>
                        </div>
                        <button className={this.props.classes.copyButton}>Copy</button>
                    </div>
                    {this.props.showLink && (
                        <Link 
                            to={`/palette/${this.props.paletteId}/${this.props.id}`} 
                            onClick={e => e.stopPropagation()}
                        >
                            <span className={this.props.classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColorBox);
