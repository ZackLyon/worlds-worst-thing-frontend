import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class QuoteItem extends Component {
    render() {
        return (
            <Link to={`/thingQuotes/${this.props.id}`} >
                <li>
                    <h1>{this.props.name}</h1>
                    <h6>{this.props.role}</h6>
                    <h4>Outpost {this.props.outpost}</h4>
                    <h6 className="quote">{this.props.quote}</h6>
                    <h4>Known Thing: {this.props.known_thing ? <span>Yes</span> : <span>No</span>}</h4>
                </li>
            </Link>
        )
    }
}
