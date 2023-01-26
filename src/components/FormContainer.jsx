import React, { useState } from 'react';
import numeral from 'numeral';

// Calculation from: 
//https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment#7.-calculate-your-monthly-payment

const FormContainer = () => {
    const [purchasePrice, setPurchasePrice] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [loanApr, setLoanApr] = useState("");
    const [monthlyPayments, setMonthlyPayments] = useState(0.00);

    const handleCalculation = async (e) => {
        e.preventDefault();
        //Validate Field

        const validatedPrice = await validateField(purchasePrice, setPurchasePrice);
        const validatedPayment = await validateField(downPayment, setDownPayment);
        const validatedLoanTerm = await validateField(loanTerm, setLoanTerm);
        const validatedLoanApr = await validateField(loanApr, setLoanApr);

        //Calculate Values
        if (
            validatedPrice &&
            validatedPayment &&
            validatedLoanTerm &&
            validatedLoanApr
        ){
            console.log("Validated Form")
            calculateValues()
        }
    }

    const calculateValues = () => {
        let principal = purchasePrice - downPayment;
        let monthlyInterest = loanApr / 100 / 12;
        let numberOfPayments = loanTerm*12;
        let monthlyPrice = (principal * [monthlyInterest * (1+monthlyInterest)**numberOfPayments] / [(1+monthlyInterest)**(numberOfPayments) -1]);
        setMonthlyPayments(monthlyPrice)
    }

    const validateField = (field, setValue) => {
        let int = parseFloat(field);
        if (field === "" || field === 0){
            setValue({...field.values, error: "Please enter a value"});
            return false;
        } else if (isNaN(int)) {
            setValue({...field.values, error: "Please enter a number"});
            return false
        }else{
            setValue(int)
            return true
        }
    }

    return (
        <div id="container">
            <h1>Herg Mortgage Calculator</h1>
            <form onSubmit={handleCalculation}>
                <div className='input-container'>
                    <div className='input-section'>
                        <label>Purchase Price: </label>
                        <p className='error-text'>{purchasePrice.error}</p>
                        <input onChange={(e) => setPurchasePrice(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>Down Payment</label>
                        <p className='error-text'>{downPayment.error}</p>
                        <input onChange={(e) => setDownPayment(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>Loan Term (Years)</label>
                        <p className='error-text'>{loanTerm.error}</p>
                        <input onChange={(e) => setLoanTerm(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>Interest Rate (%)</label>
                        <p className='error-text'>{loanApr.error}</p>
                        <input onChange={(e) => setLoanApr(e.target.value)} type="text" />
                    </div>
                </div>

                <button type="submit">Calculate</button>
            </form>
            <h3>Estimated Monthly Payments: {numeral(monthlyPayments).format("$0,0.00")}</h3>
            <p style={{marginTop: "10px"}}><a href='https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment' target="_blank" style={{color: "#2a6279"}}>Link to src calculation. 7th on Legend (side menu)</a></p>
            <p style={{color: "black"}}>FYI: Don't use letters, commas, or symbols.</p>
        </div>
    )
}

export default FormContainer