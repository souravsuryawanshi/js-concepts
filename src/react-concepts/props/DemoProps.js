import React from "react";
const DemoProps = (props) => {  //{heading, title}
    return (
    <div>
        {props.heading}, {props.title}!   
        {/* {heading}, {title}!*/}
    </div>
    );
}


class DemoPropsClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            {this.props.name}
            <DemoProps heading="Props Heading" title="Props title" />
            </div>
        )
    }
}


export default DemoPropsClass;