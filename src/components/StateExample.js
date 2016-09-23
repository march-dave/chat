import React from 'react';

class Count extends React Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0;
        };

        this.handleClcik = this.handleClick.bind(this);
    }

    handleClick() {
        this.setStat({
            value: this.state.valeu + 1;
        });
    }


    render() {
        return (
            <button onClick={this.handleClick}></button>
        );
    }
}

const AppElement =  document.getElementById('app');

RenderDOM(<Count />, AppElement);

export default Count;
