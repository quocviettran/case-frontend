import React from 'react';
<<<<<<< HEAD
import {Input} from 'semantic-ui-react';
=======
import {Input, Form} from 'semantic-ui-react';
>>>>>>> 25dbc0d3a81cfcf7106c96b59e196eed8c86a4ee

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