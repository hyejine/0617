import React, { Component } from 'react';

class Select3 extends Component {
    render() {
        return (
            <div>
                Cahrt Type: <select>

<option ><a>{this.props.mode[0]}</a></option>
<option value="Pie">{this.props.mode[1]}</option>
<option value="Line" >{this.props.mode[2]}</option>
</select>
            </div>
        );
    }
}

export default Select3;