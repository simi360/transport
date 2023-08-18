import { Fragment, useState } from "react"
import FormInput from "../form-input/form-input"
import TrailerImage from '../../assets/truck-images/trailer-car.png'

import {
    ContactContainer, 
    ContactHeading,
    ContactContents,
    ContactImageContainer,
    FormContainer,
    Button
        } from './contact.styles'


const defaultFormFields = {
    displayName: '',
    email: '',
    company: '',
    message: ''
}

const Contact = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, company, message} = formFields;
    
    const handleChange =(e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("submit");
    }
    
    return (
        <Fragment>
            <ContactContainer>
                <ContactHeading>
                    Contact Us
                </ContactHeading>


            <ContactContents>
                <ContactImageContainer>
                    <img src={TrailerImage} alt="trailer image" />
                </ContactImageContainer>

                <FormContainer>
                    <form method="post" action="mailto:harsimrankaur2313@gmail.com?subject=New Query Alert &message = some Message">
                        <FormInput
                            label="Name"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='displayName'
                            value={displayName}
                        />

                        <FormInput
                            label="Email Address"
                            type='email' 
                            required 
                            onChange={handleChange}  
                            name='email'
                            value={email}
                        />

                        <FormInput
                            label="Company Name"
                            type='company' 
                            onChange={handleChange}  
                            name='company'
                            value={company}
                        />

                        <FormInput
                            textArea="yes"
                            label="Message"
                            type='text' 
                            required 
                            onChange={handleChange}  
                            name='message'
                            value={message}
                        />


                        <Button type='submit'>Send</Button>

                    </form>
                </FormContainer>
            </ContactContents>


            </ContactContainer>
        </Fragment>
    )
}

export default Contact;