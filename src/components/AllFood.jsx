import React, { Component } from 'react'
import foods from '../foods.json'
import Food from "./Food"
import Form from "./Form"
class AllFood extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm:false,
            foods: foods,
            name: "",
            calories: "",
            image: "",
            filteredFoods:foods
        }
            this.showHide=this.showHide.bind(this)
    }

    showHide(){
        this.setState({
            showForm:true
        })
    }

    addFoodHandler = (theFood) => {
        const foodCopy = [...this.state.foods];
        foodCopy.push(theFood);
        this.setState({
            foods: foodCopy
        })
    }
    filterFoods = e => {
        let filterTheFoods = this.state.foods.filter((food)=>{
            return(
                food.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        this.setState({filteredFoods:filterTheFoods})
    }
    render() {
        return (
            <div><h1>Search For Specific Food</h1>
                <input className="w-40" type="text" onChange= {this.filterFoods}/>
                {!this.state.showForm ?<button onClick={this.showHide}>Add food</button> :<Form addTheFood={this.addFoodHandler} />}
                
                {this.state.filteredFoods.map((element, index) => (
                    <Food
                        index={index.toString()}
                        name={element.name}
                        calories={element.calories}
                        image={element.image} />
                ))}
                {/* {this.state.foods.map((food,key) => {
                    return <Food
                        key={key}
                        name={food.name}
                        calories={food.calories}
                        image={food.image}
                    />
                })} */}

            </div>
        )
    }
}

export default AllFood
