import React,{Component} from 'react'

class form extends Component{
    render (){
        return(
            <form onSubmit={this.props.name}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button>Get weather</button>
            </form>

        )
    }
}

export default form;