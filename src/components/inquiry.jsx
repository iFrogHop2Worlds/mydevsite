import React, { useState } from 'react'
import GeneralInquiry from './inquiries/general-inquiry-form';


const Inquiry = () => {
    const [currentForm, setCurrentForm] = useState('');

  

    const onChangeValue = (event) => {
        setCurrentForm(event.target.value)    
    }

    const switchForm = () => {
        switch(currentForm) {
            case 'Audit Security Form':
                return <GeneralInquiry formName={currentForm} />;
            case 'Consultation Form':
                return <GeneralInquiry formName={currentForm}/>;
            case 'New Product Form':
                return <GeneralInquiry formName={currentForm}/>
            case 'Upgrade Form':
                return <GeneralInquiry formName={currentForm}/>;
            default:
                return <p id='cta-text'>Select a form option</p>;
        }
    }

    return (
        <>  
            <div id="background">
                <div onChangeValue={onChangeValue}>
        
                    <input type="radio" value="Audit Security Form" name="Audit Security Form" checked={currentForm === "Audit Security Form"} onChange={onChangeValue} /> Audit Security Form

                    <input type="radio" value="Consultation Form" name="Consultation Form" checked={currentForm === "Consultation Form"} onChange={onChangeValue} /> Consultation Form

                    <input type="radio" value="New Product Form" name="New Product Form" checked={currentForm === "New Product Form"} onChange={onChangeValue} /> New Product Form

                    <input type="radio" value="Upgrade Form" name="Upgrade Form" checked={currentForm === "Upgrade Form"} onChange={onChangeValue} /> Upgrade Form

                </div>
                <div id='form-wrapper'>
                    {(switchForm())}
                </div>
              

            </div>
            
            

            <style>{`
                #background {
                   
                    background-color: #1e282e;
                    color: #ffffff;
                    height: auto;
                    width: auto;
                    padding-top: 140px;
                    padding-bottom: 1px;
                }
                #cta-text {
                    padding-top: 30px;
                    padding-bottom: 100px;
                    color: orange;
                }
                #form-wrapper {
                    text-align: left;
                    width: 381px;
                    padding-left: 33%;
                    padding-bottom: 5%;
                }
                @media only screen and (max-width: 800px) {
                    #form-wrapper {
                        padding-left: 10%;
                    }
                }
              
            `}</style>
      
        </>

    )
}

export default Inquiry;