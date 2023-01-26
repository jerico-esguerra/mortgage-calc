import React, { useState } from 'react';

const FormContainer = () => {
    const [purchasePrice, setPurchasePrice] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [loanApr, setLoanApr] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(0.00);

    const handleCalculation = (e) => {
        e.preventDefault();
        console.log(purchasePrice)
        console.log(downPayment)
        console.log(loanTerm)
        console.log(loanApr)
    }

    return (
        <div id="container">
            <h1>Mortgage Calculator</h1>
            <form onSubmit={handleCalculation}>
                <div className='input-container'>
                    <div className='input-section'>
                        <label>Purchase Price: </label>
                        <p className='error-text'>ERROR</p>
                        <input onChange={(e) => setPurchasePrice(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>Down Payment</label>
                        <p className='error-text'>ERROR</p>
                        <input onChange={(e) => setDownPayment(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>Loan Term (Years)</label>
                        <p className='error-text'>ERROR</p>
                        <input onChange={(e) => setLoanTerm(e.target.value)} type="text" />
                    </div>
                    <div className='input-section'>
                        <label>APR (%)</label>
                        <p className='error-text'>ERROR</p>
                        <input onChange={(e) => setLoanApr(e.target.value)} type="text" />
                    </div>
                </div>

                <button type="submit">Calculate</button>
            </form>
            <h3>Estimated Monthly Payments: ${monthlyPayment}</h3>
        </div>
    )
}

export default FormContainer