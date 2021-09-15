import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import { Form, Button} from 'react-bootstrap'

function Contact(props) {
    const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
    return (
        <div className="alert border">
<Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" name="email" placeholder="Enter email" />
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" id="message" name="message" placeholder="Enter message" rows="3" />
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

  </Form.Group>
  <Button variant="outline-danger" type="submit" disabled={state.submitting}>
    Submit
  </Button>
</Form>
            
        </div>
    );
}

export default Contact;