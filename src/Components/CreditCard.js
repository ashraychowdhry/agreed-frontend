import React, {useState, useContext} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Button from "@material-ui/core/Button";
import AppContext from "./IndividualFormSteps/AppContext";

const defaultValues = {
  temp: '',
  focus: '',
}

export default function CreditCard () {
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;
  const [formValues, setFormValues] = useState(defaultValues)

  
    const handleInputFocus = (e) => {
      setFormValues ({
          ...formValues,
          focus: e.target.name 
      });
    };
    
    const next = () => {
        updateContext.setStep(updateContext.currentPage + 1)
    }

    return (
      <div id="PaymentForm">
        <Cards
          cvc={updateContext.cvc}
          expiry={updateContext.expiry}
          focused={updateContext.focus}
          name={updateContext.name}
          number={updateContext.number}
        />
        <form>
        	<input
            type="text"
            name="name"
            placeholder="Card Name"
            onChange={e => updateContext.setName(e.target.value)}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={e => updateContext.setNumber(e.target.value)}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Expiry"
            onChange={e => updateContext.setExpiry(e.target.value)}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVV"
            onChange={e => updateContext.setcvc(e.target.value)}
            onFocus={handleInputFocus}
          />
          <Button variant="contained" color="primary" type="submit" onClick={next}> Next </Button>
        </form>
      </div>
    );
  }