import React, { useState } from 'react';
import {Col, Card, CardBody, CardHeader, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../styles/Cardcomponent.css';
import { Progress } from 'reactstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import {childSymptomsList,childSymptomsType} from '../data'
import Card2 from './card2';



const Cardcomponent = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [bornInWeek, setBornInWeek] = useState('');
  const [childWeight, setChildWeight] = useState('');
  const [childHeight, setChildHeight] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [value,setValue]=useState(25)
  const [nameError, setNameError] = useState(false);
  const [emailerr, setEmailError] = useState(false);
  const [phnerror, setPhnError] = useState(false);
  const [b,setberr]=useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
  
  }
 const nameRegex = /^[^\s]+( [^\s]+)+$/;
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const phoneRegex = /^\d{10}$/;
 const bornInWeekRegex = /^(2[0-9]|[3][0-6])$/


  const nextStep = () => {
    setStep(step + 1);
      if(value==25){
      localStorage.setItem("Child Name",JSON.stringify(name))
      localStorage.setItem("DOB",JSON.stringify(dob))
      if(bornInWeek!="")
      localStorage.setItem("Born in week",JSON.stringify(bornInWeek))
      if(childHeight!="")
      localStorage.setItem("Child Height",JSON.stringify(childHeight))
      if(childWeight!="")
      localStorage.setItem("Child Weight",JSON.stringify(childWeight))
      localStorage.setItem("Email",JSON.stringify(email))
      localStorage.setItem("Phone Number",JSON.stringify(phone))


      }
    
    setValue(value+25)
  }
 
  const prevStep = () => {
    setStep(step - 1);
    setValue(value-25)
  }
  const handlePhoneNumberChange = (value, country) => {
   
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const isValid = regex.test(value);
   setPhnError(!isValid)
    setPhone(value);
  };
  const renderStepOne = () => {
    return (
      <div>
         
        <CardTitle>
            <h4>Get your questions answered by our consultants from the comfort of your home</h4>
        </CardTitle>
        <FormGroup row >
        <Label
      for="exampleEmail2"
      sm={3}
    >
    Child's Name
    </Label>
    <Col sm={8}>
      <Input
        id="exampleEmail2"
        name="email"
        placeholder="Enter child's name"
        type="email" onChange={(e)=>{setName(e.target.value)
          setNameError(!nameRegex.test(e.target.value)); }}
          value={name}
      />
    </Col>
        </FormGroup>

        <FormGroup row >
        <Label
    
      sm={3}
    >
      Child's date of birth
    </Label>
   
    <Col sm={8}>
      <Input
        id="exampleEmail2"
        name="dob"
        placeholder="default"
        type="date"

        onChange={(e)=>{
          setDob(e.target.value)

        }}
      />
    </Col>
    </FormGroup>

 <FormGroup row >
        <Label
    
      sm={3}
    >Born at less than 37 weeks </Label>
   <Col sm="5"> 
  
   {bornInWeek===""?  <Label
    
    sm={3}
  >Yes<input type="checkbox" id="bornInWeekCheckbox" checked={bornInWeek !== ''} onChange={(event) => {setBornInWeek(event.target.checked ?20: '') 
setberr(false)}} />  </Label>:<input type="number" id="bornInWeek" value={bornInWeek} onChange={(e)=>{setBornInWeek(e.target.value) 
  setberr(!bornInWeekRegex.test(e.target.value)) }}  min={20} max={36} />}
        
        </Col>  
        <Col sm="2">
          <Label>No
        <input type="checkbox" id="bornInWeekCheckbox" checked={bornInWeek === ''} onChange={(event) => setBornInWeek(event.target.checked ? '':20)} /></Label> 
        </Col>
 </FormGroup>
 <FormGroup row>
  <Label for="childWeight" sm={3}>
    Child's weight
  </Label>
  <Col sm={3}>
    <Input
      id="childWeight"
      name="childWeight"
      type="number"
      min="0"
      step="0.01"
      placeholder="Enter child's weight"
      value={childWeight}
      onChange={(event) => setChildWeight(event.target.value)}
    />
  </Col>
  <Label for="childHeight" sm={2}>
    Weight Unit
  </Label>
  <Col sm={3}>
    <Input type='select'  onChange={(event) => setChildHeight(event.target.value)}
    >
      <option>Kg</option>
      <option>Pound</option>

      </Input>
    </Col>
  
</FormGroup>

<FormGroup row>
  <Label for="childHeight" sm={3}>
    Child's height
  </Label>
  <Col sm={3}>
    <Input
      id="childHeight"
      name="childHeight"
      type="number"
      min="0"
      step="0.01"
      placeholder="Enter child's height"
      value={childHeight}
      onChange={(event) => setChildHeight(event.target.value)}
    />
    
  </Col>
  <Label for="childHeight" sm={2}>
    Height Unit
  </Label>
  <Col sm={3}>
    <Input type='select'  onChange={(event) => setChildHeight(event.target.value)}
    >
      <option>Metres</option>
      <option>Feet</option>

      </Input>
    </Col>
</FormGroup>

<FormGroup row>
  <Label for="email" sm={3}>
    Email
  </Label>
  <Col sm={8}>
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(event) => {setEmail(event.target.value)
      setEmailError(!emailRegex.test(event.target.value))}}
    />
  </Col>
</FormGroup>

<FormGroup row>
  <Label for="phone" sm={3}>
    Phone
  </Label>
  <Col sm={8}>
  <PhoneInput
      id="phone"
      name="phone"
      placeholder="Enter phone number"
      value={phone}
     onChange={handlePhoneNumberChange}
   
      
      

    />
  </Col>
</FormGroup>

   
     
      </div>
    );
  }
  
  const renderStepTwo = () => {
    return (
        <div>
      <Card2/>
      </div>
    );
  }
  
  return (
    <Card id="card">
      <CardHeader>
      <Progress multi>
         <Progress bar value={value} />
         </Progress>
      
      </CardHeader>
      <CardBody>
        <Form id="form"onSubmit={handleSubmit}>
          {step === 1 && renderStepOne()}
          {step === 2 && renderStepTwo()}
        </Form>
        <Button color='primary' className="next" onClick={nextStep} disabled={name==""||phoneRegex.test(phone)||phnerror||nameError||emailerr||new Date(dob)>new Date()||new Date(dob)==new Date()||dob==""||email===""||phone==""||b}>Next</Button>
        {step>1?<div><Button color="secondary" className='prev'  onClick={prevStep}>Previous</Button>{' '}</div>:<div></div>}
      </CardBody>
    </Card>
  );
};

export default Cardcomponent;