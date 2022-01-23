import React from "react"

class List extends React.Component{
    render(){
        const {data} = this.props;
        return (
            <dl>
                {data.map(item=><dt key={item.dt}>{item.dt} <dd key={item.dd}>{item.dd}</dd></dt>)}
               
                
            </dl>
        )
    }
    
}
export default List