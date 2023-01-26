import React from 'react'

const FormContainer = () => {
    return (
        <div id="container">
            <h1>Mortgage Calculator</h1>
            <form>
                <div className='input-section'>
                    <label>Purchase Price: </label>
                    <input type="text" />
                </div>
                <div className='input-section'>
                    <label>Down Payment</label>
                    <input type="text" />
                </div>
                <div className='input-section'>
                    <label>Loan Term (Years)</label>
                    <input type="text" />
                </div>
                <div className='input-section'>
                    <label>APR (%)</label>
                    <input type="text" />
                </div>
            </form>
            <button>Submit</button>
            <h3>Estimated Monthly Payments: $0.00</h3>
        </div>
    )
}

export default FormContainer