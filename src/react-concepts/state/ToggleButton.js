class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
     this.setState((prevState)=>{
        isToggleOn = !prevState
     })
    }
    render(){
        return (
          <button onClick = {this.handleOnClick}>
            {this.state.isToggleOn ? 'On' : 'Off'}
          </button>
        );
    }
}