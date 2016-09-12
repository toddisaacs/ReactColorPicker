import React from 'react';

class NumInput extends React.Component {
    render() {

        return (
            <span>
                <input ref="component"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       value={this.props.defaultValue}
                       onChange={this.props.onChange}
                />
            </span>

        );
    }
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
};


NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
};

export default NumInput;
