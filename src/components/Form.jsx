import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"",
            calories:"",
            imagaddhandleChangee:"",
        }
        this.handleChangeValue=this.handleChangeValue.bind(this)
        this.handleForm=this.handleForm.bind(this)
    }
    handleChangeValue(event){
        const {name,value} = event.target
     this.setState({
        [name]:value,
     })
    }
    handleForm(event){
        event.preventDefault();
        this.props.addTheFood(this.state);   
        this.setState({
            name: '',
            calories: '',
            quantity: "",
            image:''
          })  
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleForm}>
                <input type="text"
                name="name"
                placeholder="name"
                onChange={this.handleChangeValue}
                />
                <input type="text"
                name="calories"
                placeholder="calories"
                onChange={this.handleChangeValue}
                />
                <input type="text"
                name="image"
                placeholder="image"
                onChange={this.handleChangeValue}
                />
                <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Form
