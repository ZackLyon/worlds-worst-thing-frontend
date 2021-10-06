import React, { Component } from 'react'
import { fetchQuote, fetchCategories, updateQuote, deleteQuote } from './request-utils.js';

import './UpdatePage.css';

export default class UpdatePage extends Component {
    state = {
        name: '',
        role_id: '',
        quote: '',
        known_thing: '',
        role: '',
        categories: []
    }

    componentDidMount = async() => {
        //fetch quote by id and update state with its data
        const currentId = this.props.match.params.id;
        const quoteData = await fetchQuote(currentId);
        await this.setState({name: quoteData.name, role: quoteData.role, quote: quoteData.quote, known_thing: quoteData.known_thing});

        //fetch categories and update state with their values
        const categoryArr = await fetchCategories();
        await this.setState({categories: categoryArr});
        const roleId = categoryArr.find(item => item.role === quoteData.role).id;
        console.log("role id ", roleId);
    }

    handleUpdate = async(e) => {
        e.preventDefault();
        console.log("state on update ", this.state)
        const currentId = this.props.match.params.id;
        const submission = this.state;
        const updateResponse = updateQuote(submission, currentId);
        console.log("update response ", updateResponse);
    }

    handleDelete = async(e) => {
        e.preventDefault();
        const currentId = this.props.match.params.id;
        await deleteQuote(currentId);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form id="update-form">
                    <label>
                        Name:
                        <input type="text" 
                        onChange={(e) => this.setState({name: e.target.value})} 
                        value={this.state.name}
                        >

                        </input>
                    </label>
                    <label>
                        Role:
                        <select onChange={(e) => this.setState({role_id: e.target.value})}>
                            {
                                this.state.categories.map(category => 
                                <option value={category.id} 
                                selected={category.role === this.state.role}
                                >
                                    {category.role}
                                </option>)
                            }
                        </select>
                    </label>
                    <label>
                        Quote:
                        <div>
                            <textarea form="update-form" 
                            className="quote-box"
                            onChange={(e) => this.setState({quote: e.target.value})} 
                            value={this.state.quote}
                            ></textarea>
                        </div>
                        {/* <input className="quote-box" type="text" 
                        onChange={(e) => this.setState({quote: e.target.value})} 
                        value={this.state.quote}
                        > */}
                        {/* </input> */}
                    </label>
                    <label>
                        Known to be a Thing? :
                        <select 
                        onChange={(e) => this.setState({known_thing: e.target.value})} 
                        >
                            <option value="true" 
                            selected={true === this.state.known_thing}
                            >True</option>
                            <option value="false"
                            selected={false === this.state.known_thing}
                            >False</option>
                        </select>
                    </label>
                    <div>
                        <button onClick={this.handleUpdate}>Update</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}