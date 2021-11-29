import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Button from "@material-ui/core/Button";

const defaultValues = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
}

export default function CreditCard () {
    const [formValues, setFormValues] = useState(defaultValues)
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleInputFocus = (e) => {
        setFormValues ({
            ...formValues,
            focus: e.target.name 
        });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(formValues);
        const response = await fetch('http://localhost:3001/api/creditcard', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formValues,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert("Success!")
			window.location.href = "/dashboard"
		} else {
            console.log(data.status)
			alert("Please fix the errors before continuing")
		}
    };

    return (
      <div id="PaymentForm">
        <Cards
          cvc={formValues.cvc}
          expiry={formValues.expiry}
          focused={formValues.focus}
          name={formValues.name}
          number={formValues.number}
        />
        <form>
        	<input
            type="text"
            name="name"
            placeholder="Card Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVV"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}> Submit </Button>
        </form>
      </div>
    );
  }