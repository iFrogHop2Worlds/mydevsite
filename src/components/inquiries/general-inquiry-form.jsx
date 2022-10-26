import React, { useState } from 'react';
import axios from 'axios';

const GeneralInquiry = (props) => {
    const [proDesc, setDesc] = useState("");
    const [proName, setName] = useState("");
    const [proBudget, setBudget] = useState("");
    const [proTech, setTech] = useState("");
    const [proReleaseDate, setReleaseDate] = useState("");
    const [proRepo, setRepo] = useState("");
    const [proDomain, setDomain] = useState("");

    const _handleInputsChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name == 'desc'){
            setDesc(value); 
        } else if (name == "title"){
            setName(value);   
        } else if (name == "budget"){
            setBudget(value);
        } else if (name == "tech-stack"){
            setTech(value);
        } else if (name == "release-date"){
            setReleaseDate(value);
        } else if (name == "repo"){
            setRepo(value);
        } else if (name == "domain"){
            setDomain(value);
        }
    }

    const _handleSubmmit = (e) => {
        e.preventDefault();

        if(props.formName === 'New Product Form'){
             axios.post(`http://localhost:7500/user-api/inquiry/new`, {
                description: proDesc,
                name: proName,
                budget: proBudget
             });
        } else if (props.formName === "Audit Security Form"){
             axios.post(`http://localhost:7500/user-api/inquiry/audit`, {
                description: proDesc,
                repository: proDesc,
                domain: proDomain
             });  
        } else if (props.formName === "Consultation Form"){
             axios.post(`http://localhost:7500/user-api/inquiry/consultation`, {
                description: proDesc
             });
        } else if (props.formName === "Upgrade Form"){
            axios.post(`http://localhost:7500/user-api/inquiry/upgrade`, {
                technologies: proTech,
                released: proReleaseDate,
                repository: proRepo,
                description: proDesc 
            });
        }

        setDesc('');
        setName('');
        setBudget('');
        setReleaseDate('');
        setRepo('');
        setTech('');
        setDomain('');
    }

    const switchFormInputs = () => {
        switch(props.formName) {
            case 'Audit Security Form':
                return (
                   <div>
                        <label for="desc">Describe your website/application:</label><br />
                        <textarea type="text" id="desc" name="desc" value={proDesc} onChange={_handleInputsChange} /><br />

                        <label for="title">Project code repository (optional):</label><br />
                        <input className='form-field' type="text" id="repo" name="repo" value={proRepo} onChange={_handleInputsChange} /><br />

                        <label for="title">Domain name:</label><br />
                        <input className='form-field' type="text" id="domain" name="domain" value={proDomain} onChange={_handleInputsChange} /><br />                  
                   </div>
                );
            case 'Consultation Form':
                return (
                    <div>
                        <label for="desc">Describe your idea or problem:</label><br />
                        <textarea type="text" id="desc" name="desc" value={proDesc} onChange={_handleInputsChange} /><br />
                    </div>
                );
            case 'New Product Form':
                return (
                    <div>
                        <label for="desc">Describe your idea:</label><br />
                        <textarea type="text" id="desc" name="desc" value={proDesc} onChange={_handleInputsChange} /><br />

                        <label for="title">Project name (optional):</label><br />
                        <input className='form-field' type="text" id="title" name="title" value={proName} onChange={_handleInputsChange} /><br />

                        <label for="budget">Budget:</label><br />
                        <input className='form-field' type="text" id="budget" name="budget" value={proBudget} onChange={_handleInputsChange} /><br />
                    </div>
                );
            case 'Upgrade Form':
                return (
                    <div id='form-style'>
                        <label for="tech-stack">Technologies used (comma seperated please):</label><br />
                        <input className='form-field' type="text" id="tech-stack" name="tech-stack" value={proTech} onChange={_handleInputsChange} /><br />

                        <label for="title">Project launch date:</label><br />
                        <input className='form-field' type="text" id="release-date" name="release-date" value={proReleaseDate} onChange={_handleInputsChange} /><br />

                        <label for="title">Project code repository (optional):</label><br />
                        <input className='form-field' type="text" id="repo" name="repo" value={proRepo} onChange={_handleInputsChange} /><br />

                        <label for="desc">Briefly describe your application/website:</label><br />
                        <textarea type="text" id="desc" name="desc" value={proDesc} onChange={_handleInputsChange} /><br />
                    </div>
                );
            default:
                return 'Select a form option';
        }

    }

    return (
      <>
        <div>
        <h3>{props.formName}</h3>
        <form id='projects-form'> 
            {switchFormInputs()}
            <br />
            <button onClick={_handleSubmmit}>Submit</button> 
        </form>
          
        </div>
        <style>{`
            .form-field {
                width: 380px;
                padding: 5px;
                margin: 5px;       
                }
            textarea {
                width: 380px;
                height: 200px;
            }
            #form-style {
               
            }
                
        `}</style>
      </>
      
    );
}

export default GeneralInquiry;