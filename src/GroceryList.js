import { Component } from "react";
import check from './shopping-bag2.png';

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            groceryList: [],
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        
    }

    addItem(input) {
        if(input === "") {
            alert("Please add an item!")
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input)
            this.setState({groceryList: listArray, userInput: ""})
            
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        // listArray = []; or you can wright like this:--->
        // listArray.length = 0;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="buttons">
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    <button onClick={() => this.deleteItem()}>Del</button>
                </div>

                <div className="Container">
                    <input type="text" placeholder="Add your items in the list" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
                </div>
                
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                        <img className="checked" src={check} alt="check-mark-bag" width="35px" />
                        {item}
                        </li>
                    ))
                    }
                </ul>
                </form>
            </div>
        )
    }
}