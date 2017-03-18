import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newColor: '',
            colorList: props.colorList.slice(0),
        };

        //this.onChange = this.onChange.bind(this);
        //this.onClick = this.onClick.bind(this);
    }

    onChange = (e) => {

        this.setState({
            newColor: e.target.value
        });
    }

    onClick = () => {
        this.setState({
            colorList: this.state.colorList.concat(this.state.newColor),
            newColor: '',
        });
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.onClick();
        }
    }

    render() {

        return <div>
            <h1>{this.props.header}</h1>
            <ul>
                {this.state.colorList.map(color => <li key={color}>{color}</li>)}
            </ul>
            <form>
                <div>
                    <label>New Color:</label>
                    <input type="text" id="new-color"
                        value={this.state.newColor} onKeyDown={this.onKeyDown} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.onClick}>Add Color</button>
            </form>
        </div>;
    }
}

const header = 'Color Tool!';

const colors = [
    'green', 'saffron', 'white', 'red', 'blue', 'yellow'
];

ReactDOM.render(
    <ColorTool header={header} colorList={colors} />,
    document.querySelector('main'));



