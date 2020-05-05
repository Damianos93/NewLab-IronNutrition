import React, { Component } from 'react'

class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
               <div className="container">
     
      <div className="columns">
        <div className="column">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br/>
                    <small>{this.props.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    {/* <input type="number" className="input" value="1"/> */}
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="https://i.imgur.com/DupGBz5.jpg"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Salad</strong> <br/>
                    <small>150 cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value="1"/>
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="https://i.imgur.com/hGraGyR.jpg"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sweet Potato</strong> <br/>
                    <small>120 cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value="1"/>
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div> */}
          {/* <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="https://i.imgur.com/93ekwW0.jpg"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Gnocchi</strong> <br/>
                    <small>500 cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value="1"/>
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div> */}
        </div>
        {/* <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 {this.props.name} = {this.props.calories} cal</li>
            <li>2 Salad = {this.props.calories} cal</li>
          </ul>
          <strong>Total: {this.props.calories} cal</strong>
        </div> */}
      </div>
    </div> 
            </div>
        )
    }
}

export default Food
