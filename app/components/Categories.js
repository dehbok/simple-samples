import React from 'react';

class Categories extends React.Component {




    getListItems() {
        let numbers = [1, 2, 3, 4, 5];
        return numbers.map((number) =>
            <li>{number}</li>
        );
    }

    render() {
        return (
            <ul>{this.getListItems()}</ul>
        );
    }
}
export default Categories;