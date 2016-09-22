class Couter extends React.Component {

    constructor(props) {
        supre(props);

        this.state = {
            value: 0;
        }

        // this.handleClick = this.handleClick.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({
    //         value: this.state.value + 1
    //     });
    // }

    handleClick() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return(
            <button onClick={this.handleClcik}></button>
        );
    }
}
