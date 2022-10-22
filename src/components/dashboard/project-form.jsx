import React from 'react'

const ProjectForm = (props) => {
  return (
    <>
        <form id='projects-form'>                             
            <label for="title">Project name:</label><br />
            <input className='form-field' type="text" id="title" name="title" value={props.proTitle} onChange={props._handleInputsChange} /><br />

            <label for="desc">Enter a description:</label><br />
            <textarea type="text" id="desc" name="desc" value={props.proDesc} onChange={props._handleInputsChange} /><br />

            <label for="repo-link">Code repository link:</label><br />
            <input className='form-field' type="text" id="repo-link" name="repo-link" value={props.proRepo} onChange={props._handleInputsChange} /><br />

            <label for="preview-link">Preview link:</label><br />
            <input className='form-field' type="text" id="preview-link" name="preview-link" value={props.proDemo} onChange={props._handleInputsChange} /><br />

            <br />
            <button onClick={props._handleSubmmit}>Submit</button>  <button onClick={props._handleDelete}>Delete</button>
        </form>
    </>
  )
}

export default ProjectForm 