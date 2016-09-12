import React from 'react';
import ReactDOM from 'react-dom';

import NumInput from '../NumberInput';
import ColorBox from './ColorBox';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            txt: '',
            red: props.red,
            green: props.green,
            blue: props.blue,
            alpha: props.alpha
        };

        if (props.onUpdate) {
            this.onUpdate = props.onUpdate.bind(this);
        }

        if (props.onSelect) {
            this.onSelect = props.onSelect.bind(this);
        }

    }

    handleColorClick() {
        if (this.onSelect) {
            this.onSelect({red: this.state.red, green: this.state.green, blue: this.state.blue, alpha: this.state.alpha});
        }
    }

    update() {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.component).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.component).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.component).value,
            alpha: ReactDOM.findDOMNode(this.refs.alpha.refs.component).value,
        });

        if (this.onUpdate) {
            this.onUpdate({red: this.state.red, green:this.state.green, blue: this.state.blue, alpha: this.state.alpha});
        }
    }

    componentDidMount() {
        this.setState({
            txt: this.props.txt
        })
    }

    render() {

        return (
            <div>
                <h3>{this.state.txt}</h3>
                <NumInput type={'range'}
                          defaultValue={this.state.red}
                          ref="red"
                          min={0}
                          max={255}
                          step={1}
                          onChange={this.update.bind(this)} />{this.state.red}<br/>

                <NumInput type={'range'}
                          defaultValue={this.state.green}
                          ref="green"
                          min={0}
                          max={255}
                          step={1}
                          onChange={this.update.bind(this)} />{this.state.green}<br/>

                <NumInput type={'range'}
                          defaultValue={this.state.blue}
                          ref="blue"
                          min={0}
                          max={255}
                          step={1}
                          onChange={this.update.bind(this)} />{this.state.blue}<br/>

                <NumInput type={'range'}
                          defaultValue={this.state.alpha}
                          ref="alpha"
                          min={0}
                          max={1}
                          step={.01}
                          onChange={this.update.bind(this)} />{this.state.alpha}<br/>

                <ColorBox size={50}
                          red={this.state.red}
                          green={this.state.green}
                          blue={this.state.blue}
                          alpha={this.state.alpha}
                          onSelect={this.handleColorClick.bind(this)}
                />
            </div>
        );
    }
}

ColorPicker.propTypes = {
    txt: React.PropTypes.string,
    red: React.PropTypes.number,
    green: React.PropTypes.number,
    blue: React.PropTypes.number,
    onUpdate: React.PropTypes.func,
    onSelect: React.PropTypes.func
};

ColorPicker.defaultProps = {
    txt: 'Color Picker',
    red: 0,
    green: 0,
    blue: 126,
    alpha: .8
};

export default ColorPicker;