"use client";
import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

// Convert object to PDF
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const PurchaseAgreementForm = () => { 
    const [formValues, setFormValues] = useState({
        datePrepared: '',
        buyer: '',
        streetAddress: '',
        city: '',
        county: '',
        state: 'California',
        zipCode: '',
        assessorParcelNumber: '',
        purchasePrice: '',
        closeOfEscrow: '',
        initialDeposit: '',
        increasedDeposit: '',
        allCashOffer: false,
        verificationDeliveryTimeframe: '',
        firstLoanAmount: '',
        firstLoanType: '',
        firstLoanFixedRate: '',
        firstLoanAdjustableRate: '',
        firstLoanPoints: '',
        secondLoanAmount: '',
        secondLoanType: '',
        secondLoanFixedRate: '',
        secondLoanAdjustableRate: '',
        secondLoanPoints: '',
        fhaVaLoanTimeframe: '',
    });

    const [isFormInvalid, setIsFormInvalid] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: checked,
        }));
    };

    const handleFormSubmit = (values) => {
        console.log(values);
        // if values empty, set isFormInvalid to true
        setIsFormInvalid(Object.values(values).some((value) => value === ''));
        setFormValues({
            datePrepared: '',
            buyer: '',
            streetAddress: '',
            city: '',
            county: '',
            state: 'California',
            zipCode: '',
            assessorParcelNumber: '',
            purchasePrice: '',
            closeOfEscrow: '',
            initialDeposit: '',
            increasedDeposit: '',
            allCashOffer: false,
            verificationDeliveryTimeframe: '',
            firstLoanAmount: '',
            firstLoanType: '',
            firstLoanFixedRate: '',
            firstLoanAdjustableRate: '',
            firstLoanPoints: '',
            secondLoanAmount: '',
            secondLoanType: '',
            secondLoanFixedRate: '',
            secondLoanAdjustableRate: '',
            secondLoanPoints: '',
            fhaVaLoanTimeframe: '',

        })
    };

    const handleDownload = () => { 
            // Initialize jsPDF instance
            const doc = new jsPDF();
        
            // Define columns and rows for the table
            const columns = ["Field", "Value"];
            const rows = Object.entries(formValues);
        
            // Add the table to the PDF
            doc.autoTable({ columns, body: rows });
        
            // Download the PDF
            doc.save("purchase_agreement.pdf");
    };

    return (
        <div className="w-[80%] md:w-[60%] mx-auto mt-10">
            <h1 className="text-xl font-bold text-center mb-5">CALIFORNIA RESIDENTIAL PURCHASE AGREEMENT AND JOINT ESCROW FORM</h1>
            <form className='grid grid-cols-2 gap-3 h-[70vh] overflow-scroll py-5' onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(formValues);
            }}>
                <div>
                    <TextField
                        id="datePrepared"
                        label="Date Prepared"
                        type="date"
                        variant="outlined"
                        className='w-full'
                        value={formValues.datePrepared}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.datePrepared}
                        helperText={isFormInvalid && !formValues.datePrepared ? 'Date Prepared Required' : ''}
                        InputLabelProps={{ shrink: true }}
                    />
                </div>
                <div>
                    <TextField
                        id="buyer"
                        label="Buyer"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.buyer}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.buyer}
                        helperText={isFormInvalid && !formValues.buyer ? 'Buyer Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="streetAddress"
                        label="Street Address"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.streetAddress}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.streetAddress}
                        helperText={isFormInvalid && !formValues.streetAddress ? 'Street Address Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="city"
                        label="City"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.city}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.city}
                        helperText={isFormInvalid && !formValues.city ? 'City Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="county"
                        label="County"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.county}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.county}
                        helperText={isFormInvalid && !formValues.county ? 'County Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="zipCode"
                        label="Zip Code"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.zipCode}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.zipCode}
                        helperText={isFormInvalid && !formValues.zipCode ? 'Zip Code Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="assessorParcelNumber"
                        label="Assessor's Parcel Number"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.assessorParcelNumber}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.assessorParcelNumber}
                        helperText={isFormInvalid && !formValues.assessorParcelNumber ? 'Assessor\'s Parcel Number Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="purchasePrice"
                        label="Purchase Price"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.purchasePrice}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.purchasePrice}
                        helperText={isFormInvalid && !formValues.purchasePrice ? 'Purchase Price Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="closeOfEscrow"
                        label="Close of Escrow"
                        type="date"
                        variant="outlined"
                        className='w-full'
                        value={formValues.closeOfEscrow}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.closeOfEscrow}
                        helperText={isFormInvalid && !formValues.closeOfEscrow ? 'Close of Escrow Required' : ''}
                        InputLabelProps={{ shrink: true }}
                    />
                </div>
                <div>
                    <TextField
                        id="initialDeposit"
                        label="Initial Deposit"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.initialDeposit}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.initialDeposit}
                        helperText={isFormInvalid && !formValues.initialDeposit ? 'Initial Deposit Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="increasedDeposit"
                        label="Increased Deposit"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.increasedDeposit}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.increasedDeposit}
                        helperText={isFormInvalid && !formValues.increasedDeposit ? 'Increased Deposit Required' : ''}
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="allCashOffer"
                                checked={formValues.allCashOffer}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="All Cash Offer"
                    />
                </div>
                <div>
                    <TextField
                        id="verificationDeliveryTimeframe"
                        label="Verification Delivery Timeframe"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.verificationDeliveryTimeframe}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.verificationDeliveryTimeframe}
                        helperText={isFormInvalid && !formValues.verificationDeliveryTimeframe ? 'Verification Delivery Timeframe Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="firstLoanAmount"
                        label="First Loan Amount"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.firstLoanAmount}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.firstLoanAmount}
                        helperText={isFormInvalid && !formValues.firstLoanAmount ? 'First Loan Amount Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="firstLoanType"
                        label="First Loan Type"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.firstLoanType}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.firstLoanType}
                        helperText={isFormInvalid && !formValues.firstLoanType ? 'First Loan Type Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="firstLoanFixedRate"
                        label="First Loan Fixed Rate (%)"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.firstLoanFixedRate}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.firstLoanFixedRate}
                        helperText={isFormInvalid && !formValues.firstLoanFixedRate ? 'First Loan Fixed Rate Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="firstLoanAdjustableRate"
                        label="First Loan Adjustable Rate (%)"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.firstLoanAdjustableRate}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.firstLoanAdjustableRate}
                        helperText={isFormInvalid && !formValues.firstLoanAdjustableRate ? 'First Loan Adjustable Rate Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="firstLoanPoints"
                        label="First Loan Points"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.firstLoanPoints}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.firstLoanPoints}
                        helperText={isFormInvalid && !formValues.firstLoanPoints ? 'First Loan Points Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="secondLoanAmount"
                        label="Second Loan Amount"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.secondLoanAmount}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.secondLoanAmount}
                        helperText={isFormInvalid && !formValues.secondLoanAmount ? 'Second Loan Amount Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="secondLoanType"
                        label="Second Loan Type"
                        variant="outlined"
                        type="text"
                        className='w-full'
                        value={formValues.secondLoanType}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.secondLoanType}
                        helperText={isFormInvalid && !formValues.secondLoanType ? 'Second Loan Type Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="secondLoanFixedRate"
                        label="Second Loan Fixed Rate (%)"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.secondLoanFixedRate}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.secondLoanFixedRate}
                        helperText={isFormInvalid && !formValues.secondLoanFixedRate ? 'Second Loan Fixed Rate Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="secondLoanAdjustableRate"
                        label="Second Loan Adjustable Rate (%)"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.secondLoanAdjustableRate}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.secondLoanAdjustableRate}
                        helperText={isFormInvalid && !formValues.secondLoanAdjustableRate ? 'Second Loan Adjustable Rate Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="secondLoanPoints"
                        label="Second Loan Points"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.secondLoanPoints}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.secondLoanPoints}
                        helperText={isFormInvalid && !formValues.secondLoanPoints ? 'Second Loan Points Required' : ''}
                    />
                </div>
                <div>
                    <TextField
                        id="fhaVaLoanTimeframe"
                        label="FHA/VA Loan Timeframe (Days)"
                        variant="outlined"
                        type="number"
                        className='w-full'
                        value={formValues.fhaVaLoanTimeframe}
                        onChange={handleInputChange}
                        error={isFormInvalid && !formValues.fhaVaLoanTimeframe}
                        helperText={isFormInvalid && !formValues.fhaVaLoanTimeframe ? 'FHA/VA Loan Timeframe Required' : ''}
                    />
                </div>
                <div className='col-span-2 flex justify-center gap-5'>
                    <Button type="submit" variant="contained" className="bg-[--color-primary] w-[150px]">
                        Submit
                    </Button>
                    <Button variant="contained" className="bg-[--color-primary] w-[150px]" onClick={handleDownload}>
                        Download
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PurchaseAgreementForm;