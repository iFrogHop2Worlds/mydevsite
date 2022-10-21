import React from 'react'

const ArticleForm = (props) => {
  return (
    <>
        <form id='articles-form'>
            <label for="title">Article title:</label><br />
            <input className='form-field' type="text" id="title" name="title" value={props.proTitle} onChange={props._handleInputsChange} /><br />

            <label for="content">content:</label><br />
            <textarea type="text" id="content" name="content" value={props.proDesc} onChange={props._handleInputsChange} /><br />

             <br />
            <button onClick={props._handleSubmmit}>Submit</button>
        </form>
    </>
  )
}

export default ArticleForm