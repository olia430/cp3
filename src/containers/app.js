import { Component } from 'react'
import harden from '../images/harden.png'
import xiaomi from '../images/xiaomi.png'
class Index extends Component {
    constructor(props){
        super(props)
this.state={
team: 'houston rockets'
}
}
    render(){
        return (
<div>
<div>harden is a {this.state.team}'s player! </div>
         <div>< img src={harden} /> </div>
<div>< img src={xiaomi} /> </div>
</div>
)
    }
}
export default Index