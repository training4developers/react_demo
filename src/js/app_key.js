import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        };
    }

    render() {

        console.log(this.props.item, this.state.item);

        return <li>{this.state.item}</li>;
    }

}

class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: props.items.concat()
        };
    }

    componentDidMount() {

        setTimeout(() => {
            console.log('timeout executed');

            this.setState({
                items: this.state.items.slice(1),
            });

        },3000);

    }


    render() {

        console.log(this.state.items);

        return <ul>
            {this.state.items.map(item => <ListItem key={item} item={item} />)}
        </ul>;
    }

}

const colors = [
    'green', 'saffron', 'white', 'red', 'blue', 'yellow'
];

ReactDOM.render(
    <ItemList items={colors} />,
    document.querySelector('main'));