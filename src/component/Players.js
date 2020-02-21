import React,{Component} from "react"

class Player extends Component {
    state = {
        playerOne : "",
        playerTwo : ""
    }
    // Handle the submit form
    handleSubmit = (e) => {
        e.preventDefault();
        // Pass two player information to the Board component
        this.props.setPlayer(this.state.playerOne, this.state.playerTwo);
    }
    render(){
        return(
            <form className="playerForm" onSubmit={this.handleSubmit}>
                
                <label htmlFor="firstPlayer">1st player:</label>
                <input type="text" id="firstPlayer" placeholder="Name" value={this.state.playerOne} onChange={(e) => this.setState({playerOne: e.target.value})}/>
                <label htmlFor="secondPlayer">2nd player:</label>
                <input type="text" id="secondPlayer" placeholder="Name" value={this.state.playerTwo} onChange={(e) => this.setState({playerTwo: e.target.value})}/>

                <button type="submit">Save</button>
            </form>
        )
    }
    
}

export default Player;