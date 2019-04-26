import React from 'react';
import {Input, Form} from 'semantic-ui-react';

const EmailInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (

                      <Input 
                        className={formControl}
                        {...props}
                        fluid 
                        icon='user' 
                        iconPosition='left'
                        placeholder='E-mail' 
                        name='email'
                        />     
                    
    );
}

export default EmailInput;