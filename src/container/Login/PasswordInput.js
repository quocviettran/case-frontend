import React from 'react';
import {Input} from 'semantic-ui-react';

const PasswordInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
       

                      <Input 
                        className={formControl}
                        {...props}
                        fluid 
                        icon='lock' 
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        />     
                  
    );
}

export default PasswordInput;