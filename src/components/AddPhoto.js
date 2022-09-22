import React, { Component } from 'react'

export default class AddPhoto extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e){
    e.preventDefault();
    const imageLink=e.target.elements.link.value;
    const description =e.target.elements.description.value;
    const post={
      id: Number(new Date()),
      description: description,
      imageLink: imageLink 
    }
    if(description && imageLink ){
      this.props.onAddPhoto(post)
    }

  }
  render() { 
    return (
      <div>
         <h1>photowall</h1>
      <form className='form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Link' name='link' />
        <input type='text' placeholder='Description' name='description' />
        <button>Post</button>
      </form>

      </div>
    )
  }
}
