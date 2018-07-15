import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    
    myInput = React.createRef();

    goToStore = (event) => {
        //1.stop de submit form from submit
        event.preventDefault();
        //2.obtain the text on the submit
        const storeName = this.myInput.value.value
        //change the state of the Router
        this.props.history.push(`/store/${storeName}`)
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required placeholder="Store name"
                    defaultValue={getFunName()} />
                <button type="submit">Visit Store -></button>
            </form>

        )
    }
}

export default StorePicker;