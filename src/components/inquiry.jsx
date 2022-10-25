import React, { useState } from 'react'
import AuditSecurityForm from './inquiries/audit-security-form';
import ConsultationForm from './inquiries/consultation-form';
import NewProductForm from './inquiries/newproduct-form';
import UpgradeForm from './inquiries/upgrade-form';


const Inquiry = () => {
    const [currentForm, setCurrentForm] = useState('');


    const switchForm = () => {
        switch(currentForm) {
            case 'AuditSecurity':
                return <AuditSecurityForm />
            case 'Consultation Form':
                return <ConsultationForm />;
            case 'NewProduct':
                return <NewProductForm />;
            case 'UpgradeForm':
                return <UpgradeForm />;
            default:
                return 'foo';
        }
    }

    return (
        <>
            <div>Inquiry</div>
            {switchForm}

            {/* <input type="radio" id="newApp" name="form_options" value="HTML"></input>
            <label for="newApp">New application/website</label>
            <input type="radio" id="consultation" name="form_options" value="HTML"></input>
            <label for="consultation">Consultation</label>
            <input type="radio" id="auditSecurity" name="form_options" value="HTML"></input>
            <label for="auditSecurity">HTML</label>
            <input type="radio" id="upgradeApp" name="form_options" value="HTML"></input>
            <label for="upgradeApp">HTML</label> */}
      
        </>

    )
}

export default Inquiry;