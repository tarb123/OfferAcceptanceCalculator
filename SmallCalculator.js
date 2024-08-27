import React, { useState } from 'react';

const SmallCalculator = () => {
//Compensation B (Current)
const [BasicSalaryCurrent, setBasicSalary] = useState('');
const [HouseRentCurrent, setHouseRentPercent] = useState('');
const [UtilitiesCurrent, setUtilitiesPercent] = useState('');
const [MedicalCurrent, setMedicalPercent] = useState('');
const [lfaCurrent, setLfaPercent] = useState('');
const [AdjustmentForFuelCurrent, setAdjustmentForFuel] = useState('');
const [RetentionAmountCurrent, setRetentionAmount] = useState('');

// Compensation B (Previous)
const [BasicSalaryPrevious, setPrevBasicSalary] = useState('');
const [HouseRentPrevious, setPrevHouseRentPercent] = useState('');
const [UtilitiesPrevious, setPrevUtilitiesPercent] = useState('');
const [MedicalPrevious, setPrevMedicalPercent] = useState('');
const [lfaPrevious, setPrevLfaPercent] = useState('');
const [AdjustmentForFuelPrevious, setPrevAdjustmentForFuel] = useState('');
const [RetentionAmountPrevious, setPrevRetentionAmount] = useState('');

//Compensation C (Current)
const [asrCurrent, setasrCurrent]=useState('');
const [daCurrent, setdaCurrent]=useState('');
const [mpCurrent, setmpCurrent]=useState(''); 
const [dsaCurrent, setdsaCurrent]=useState('');
  const [sCurrent, setsCurrent]=useState('');
  const [resCurrent, setresCurrent]=useState('');
  const [cellCurrent, setcellCurrent]=useState('');
  const [iCurrent , setiCurrent]=useState('');
  const [deaCurrent, setdeaCurrent]=useState('');
  const [paCurrent, setpaCurrent]=useState(''); 
  
//Compensation C (Previous)
  const [asrPrevious, setasrPrevious]=useState('');
  const [daPrevious, setdaPrevious]=useState('');
  const [mpPrevious, setmpPrevious]=useState(''); 
  const [dsaPrevious, setdsaPrevious]=useState('');
  const [sPrevious, setsPrevious]=useState('');
  const [resPrevious, setresPrevious]=useState('');
  const [cellPrevious, setcellPrevious]=useState('');
  const [iPrevious, setiPrevious]=useState('');
  const [deaPrevious, setdeaPrevious]=useState('');
  const [paPrevious, setpaPrevious ]=useState(''); 
  
//Compensation D (Current)
const[vbCurrent, setvbCurrent] =useState('');
const[smCurrent, setsmCurrent] =useState('');

//Compensation D (Previous)
const[vbPrevious, setvbPrevious] =useState('');
const[smPrevious, setsmPrevious] =useState('');

//Compensation E (Current)
const[carCurrent, setcarCurrent] = useState();
const[carInsuranceCurrent, setcarInsuranceCurrent] = useState();
const[carFuelCurrent, setcarFuelCurrent] = useState();
const[carMaintenanceCurrent, setcarMaintenanceCurrent] = useState();
const[carRegRoadTaxCurrent, setcarRegRoadTaxCurrent] = useState();
const[trackerCurrent, settrackerCurrent] = useState();
const[companyProvidedTravelingCurrent, setcompanyProvidedTravelingCurrent] = useState();
const[corporateClubMembershipCurrent, setcorporateClubMembershipCurrent] = useState();
const[clubSubscriptionCurrent, setclubSubscriptionCurrent] = useState();
const[apartmentRentCurrent, setapartmentRentCurrent] = useState();
const[hardFurnishingsCurrent, sethardFurnishingsCurrent] = useState();
const[creditCardsStatutoryContributionCurrent, setcreditCardsStatutoryContributionCurrent] = useState();
const[otherPerquisitesCurrent, setotherPerquisitesCurrent] = useState();
const[securityServicesGuardsCurrent, setsecurityServicesGuardsCurrent] = useState();
const[mealSubsidyHousingLoanCurrent, setmealSubsidyHousingLoanCurrent] = useState();
const[entertainmentAllowanceCurrent, setentertainmentAllowanceCurrent] = useState();
const[leaveEncashmentCurrent, setleaveEncashmentCurrent] = useState();
const[homeTravelCurrent, sethomeTravelCurrent] = useState();
const[groupLifeCurrent, setgroupLifeCurrent] = useState();
const[hospitalizationInsuranceCurrent, sethospitalizationInsuranceCurrent] = useState();
const[medicalOpdCurrent, setmedicalOpdCurrent] = useState();
const[pensionCurrent, setpensionCurrent] = useState();
const[pfCurrent, setpfCurrent] = useState();
const[eobiCurrent, seteobiCurrent] = useState();
const[gratuityCurrent, setgratuityCurrent] = useState();


//Compensation E (Previous)
const[carPrevious, setcarPrevious] = useState();
const[carInsurancePrevious, setcarInsurancePrevious] = useState();
const[carFuelPrevious, setcarFuelPrevious] = useState();
const[carMaintenancePrevious, setcarMaintenancePrevious] = useState();
const[carRegRoadTaxPrevious, setcarRegRoadTaxPrevious] = useState();
const[trackerPrevious, settrackerPrevious] = useState();
const[companyProvidedTravelingPrevious, setcompanyProvidedTravelingPrevious] = useState();
const[corporateClubMembershipPrevious, setcorporateClubMembershipPrevious] = useState();
const[clubSubscriptionPrevious, setclubSubscriptionPrevious] = useState();
const[apartmentRentPrevious, setapartmentRentPrevious] = useState();
const[hardFurnishingsPrevious, sethardFurnishingsPrevious] = useState();
const[creditCardsStatutoryContributionPrevious, setcreditCardsStatutoryContributionPrevious] = useState();
const[otherPerquisitesPrevious, setotherPerquisitesPrevious] = useState();
const[securityServicesGuardsPrevious, setsecurityServicesGuardsPrevious] = useState();
const[mealSubsidyHousingLoanPrevious, setmealSubsidyHousingLoanPrevious] = useState();
const[entertainmentAllowancePrevious, setentertainmentAllowancePrevious] = useState();
const[leaveEncashmentPrevious, setleaveEncashmentPrevious] = useState();
const[homeTravelPrevious, sethomeTravelPrevious] = useState();
const[groupLifePrevious, setgroupLifePrevious] = useState();
const[hospitalizationInsurancePrevious, sethospitalizationInsurancePrevious] = useState();
const[medicalOpdPrevious, setmedicalOpdPrevious] = useState();
const[pensionPrevious, setpensionPrevious] = useState();
const[pfPrevious, setpfPrevious] = useState();
const[eobiPrevious, seteobiPrevious] = useState();
const[gratuityPrevious, setgratuityPrevious] = useState();

const [annualPackageCurrent, setAnnualPackageCurrent] = useState(0);
const [annualPackagePrevious, setAnnualPackagePrevious] = useState(0);
const [compaRatioCurrent, setCompaRatioCurrent] = useState(0);
const [compaRatioPrevious, setCompaRatioPrevious] = useState(0);

 
// Ensure these functions are defined somewhere in your code
const roundNumber = (num) => Math.round(num);
const formatNumber = (num) => {
  if (num === undefined || num === null || isNaN(num)) {
    return '0';
  }
  return num.toLocaleString();
};

// Calculate the values based on percentages
const calculateValue = (percentage, salary) => {
return salary ? Math.round(salary * (percentage / 100)) : 0;
};

// Calculate SUB-TOTAL (B):
const calculateSubTotalB = (salary, houseRent, utilities, medical, lfa, adjustmentForFuel, retentionAmount) => {
return (
  calculateValue(houseRent, salary) + calculateValue(utilities, salary) + calculateValue(medical, salary) + calculateValue(lfa, salary) + (adjustmentForFuel || 0) + (retentionAmount || 0)
);
};
  
// Calculate Total (A + B): FOR CURRENT COMPANY
const totalABCurrent = () => {
const subtotalB = calculateSubTotalB
(
 parseFloat(BasicSalaryCurrent) || 0, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
);
  return (parseFloat(BasicSalaryCurrent) || 0) + subtotalB;
};

// Calculate Total (A + B): FOR PREVIOUS COMPANY
const totalABPrevious = () => {
const subtotalB = calculateSubTotalB
(
 parseFloat(BasicSalaryPrevious) || 0, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
);
  return (parseFloat(BasicSalaryPrevious) || 0) + subtotalB;
};

// Calculate SUB-TOTAL (C):
const calculateSubTotalC = (asr, da, mp, dsa, s, res, cell, i, dea, pa) => {
return(
  (asr || 0) +  (da || 0)  + ( mp || 0) + ( dsa || 0) + ( s || 0) + (res || 0) +  (cell || 0) + ( i || 0) + ( dea || 0) + ( pa || 0)
);
};

 

// Calculate Total A + B + C //: FOR CURRENT COMPANY
// totalABCCurrent -> TOTAL ( A + B + C)

const totalABCCurrent = () => {
//1. 
const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR CURRENT COMPANY
(
  parseFloat(BasicSalaryCurrent), HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
);
  
//2.
const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR CURRENT COMPANY
(
  asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent
);
  
  return parseFloat(BasicSalaryCurrent) + subtotalB + subtotalC;
};

// Calculate Total (A + B + C) : FOR PREVIOUS COMPANY
// totalABCPrevious -> TOTAL ( A + B + C)

const totalABCPrevious = () => {
//1.
const subtotalB = calculateSubTotalB //BASIC SALARY (B): FOR PREVIOUS COMPANY
(
  parseFloat(BasicSalaryPrevious), HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
);

//2.
const subtotalC = calculateSubTotalC //ALLOWANCES (C): FOR PREVIOUS COMPANY
(
  asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
);
  
  return parseFloat(BasicSalaryPrevious) + subtotalB + subtotalC;
};

// SUB-TOTAL (D):
const calculateSubTotalD = (vb, sm) => {
  return( 
  (vb || 0) + (sm || 0)
);
};

// Calculate Total (A + B + C + D) : FOR CURRENT COMPANY
const totalABCDCurrent = () => {
  return totalABCCurrent() + calculateSubTotalD(vbCurrent, smCurrent);
};

// Calculate Total (A + B + C + D) : FOR PREVIOUS COMPANY

const totalABCDPrevious = () => {
  return totalABCPrevious() + calculateSubTotalD(vbPrevious, smPrevious);
};

// SUB-TOTAL (E):
const calculateSubTotalE = 
(
car, carInsurance, carFuel, carMaintenance, carRegRoadTax, tracker,
companyProvidedTraveling, corporateClubMembership, clubSubscription, apartmentRent,
hardFurnishings, creditCardsStatutoryContribution, otherPerquisites, securityServicesGuards,
mealSubsidyHousingLoan, entertainmentAllowance, leaveEncashment,
homeTravel, groupLife, hospitalizationInsurance, medicalOpd, pension, pf, eobi, gratuity ) => {
  
return (
  (car || 0) + (carInsurance || 0) + (carFuel || 0) + (carMaintenance || 0) + (carRegRoadTax || 0) + (tracker || 0) +
  (companyProvidedTraveling || 0) +  (corporateClubMembership || 0) +  (clubSubscription || 0) + (apartmentRent || 0) + 
  (hardFurnishings || 0) + (creditCardsStatutoryContribution || 0) + (otherPerquisites || 0) + (securityServicesGuards || 0) +
  (mealSubsidyHousingLoan || 0) + (entertainmentAllowance || 0) + (leaveEncashment || 0) + (homeTravel || 0) + (groupLife || 0) +
  (hospitalizationInsurance || 0) + (medicalOpd || 0) + (pension || 0) + (pf || 0) + (eobi || 0) + (gratuity || 0)
);
};

// Calculate Total (A + B + C + D + E) : FOR CURRENT COMPANY
const totalABCDECurrent = () => {
  
//1.
const subtotalA = parseFloat(BasicSalaryCurrent);

//2.
const subtotalB = calculateSubTotalB
(
  BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent, RetentionAmountCurrent
);

//3.  
const subtotalC = calculateSubTotalC
(
  asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent
);
  
//4.
const subtotalD = calculateSubTotalD
(
  vbCurrent, smCurrent
);
  
//5.
const subtotalE = calculateSubTotalE
(
  carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
  companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent, 
  hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, 
  mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent, 
  hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
);
  return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
};

// Calculate Total (A + B + C + D + E) : FOR PREVIOUS COMPANY
const totalABCDEPrevious = () => {

//1.
const subtotalA = parseFloat(BasicSalaryPrevious); 

//2.
const subtotalB = calculateSubTotalB
(
 BasicSalaryPrevious, HouseRentPrevious, UtilitiesPrevious, MedicalPrevious, lfaPrevious, AdjustmentForFuelPrevious, RetentionAmountPrevious
);

//3.
const subtotalC = calculateSubTotalC
(
 asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious
);

//4.
const subtotalD = calculateSubTotalD
(
  vbPrevious, smPrevious
);

//5.
const subtotalE = calculateSubTotalE
(
  carPrevious, carInsurancePrevious, carFuelPrevious, carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
  companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious, 
  hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious, 
  mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious, 
  hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
);
  return subtotalA + subtotalB + subtotalC + subtotalD + subtotalE;
};

useState(() => {
  const newAnnualPackageCurrent = roundNumber(totalABCDECurrent * 12);
  const newAnnualPackagePrevious = roundNumber(totalABCDEPrevious * 12);
  const newCompaRatioCurrent = roundNumber((totalABCDECurrent / 177746) * 100);
  const newCompaRatioPrevious = roundNumber((totalABCDEPrevious / 177746) * 100);

  setAnnualPackageCurrent(newAnnualPackageCurrent);
  setAnnualPackagePrevious(newAnnualPackagePrevious);
  setCompaRatioCurrent(newCompaRatioCurrent);
  setCompaRatioPrevious(newCompaRatioPrevious);
}, [totalABCDECurrent, totalABCDEPrevious]);
 
 return (
    <div>
    <h2>Small Calculator</h2>
    <table className="compensation-table">
    <thead>
    <tr>
    <th>#</th>
    <th>Compensation Breakdown</th>
    <th>Current Company (PKR/Month)</th>
    <th>Previous Company (PKR/Month)</th>
    </tr>
    </thead>
    <tbody>

 <tr><td className="bold-black centered" colSpan={2}>Basic Salary </td><td></td><td></td></tr>
<tr>
<td>1</td>
<td>Basic Salary</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={BasicSalaryCurrent} onChange={(e) => setBasicSalary(parseFloat(e.target.value) || '')}/>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={BasicSalaryPrevious} onChange={(e) => setPrevBasicSalary(parseFloat(e.target.value) || '')}/>
</td>
</tr>

<tr>
<td>2</td>
<td>House Rent (% of Basic)</td>

<td className="centered">
<input type="number" placeholder="Enter Percentage" value={HouseRentCurrent} onChange={(e) => setHouseRentPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(HouseRentCurrent, BasicSalaryCurrent))}</div>
</td>
<td className="centered">
<input type="number" placeholder="Enter Percentage" value={HouseRentPrevious} onChange={(e) => setPrevHouseRentPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(HouseRentPrevious, BasicSalaryPrevious))}</div>
</td>
</tr>

<tr>
<td>3</td>
<td>Utilities (% of Basic)</td>

<td className="centered">
<input type="number" placeholder="Enter Percentage" value={UtilitiesCurrent} onChange={(e) => setUtilitiesPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(UtilitiesCurrent, BasicSalaryCurrent))}</div>
</td>
            
<td className="centered">
<input type="number" placeholder="Enter Percentage" value={UtilitiesPrevious} onChange={(e) => setPrevUtilitiesPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(UtilitiesPrevious, BasicSalaryPrevious))}</div>
</td>
</tr>

<tr>            
<td>4</td>
<td>Medical (% of Basic)</td>

<td className="centered">
<input type="number" placeholder="Enter Percentage" value={MedicalCurrent} onChange={(e) => setMedicalPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(MedicalCurrent, BasicSalaryCurrent))}</div>
</td>
<td className="centered">
<input type="number" placeholder="Enter Percentage" value={MedicalPrevious} onChange={(e) => setPrevMedicalPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(MedicalPrevious, BasicSalaryPrevious))}</div>
</td>
</tr>
 
<tr>
<td>5</td>
<td>LFA (% of Basic)</td>

<td className="centered">
<input type="number" placeholder="Enter Percentage" value={lfaCurrent} onChange={(e) => setLfaPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(lfaCurrent, BasicSalaryCurrent))}</div>
</td>
<td className="centered">
<input type="number" placeholder="Enter Percentage" value={lfaPrevious} onChange={(e) => setPrevLfaPercent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(calculateValue(lfaPrevious, BasicSalaryPrevious))}</div>
</td>
</tr>

<tr>
<td>6</td>
<td>Adjustment for Fuel</td>
<td className="centered">
<input type="number" placeholder="Enter Amount" value={AdjustmentForFuelCurrent} onChange={(e) => setAdjustmentForFuel(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(AdjustmentForFuelCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={AdjustmentForFuelPrevious} onChange={(e) => setPrevAdjustmentForFuel(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(AdjustmentForFuelPrevious)}</div>
</td>
</tr>

<tr>
<td>7</td>
<td>Retention Amount</td>
<td className="centered"> 
<input type="number" placeholder="Enter Amount" value={RetentionAmountCurrent} onChange={(e) => setRetentionAmount(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(RetentionAmountCurrent)}</div>
</td>
          
<td className="centered"> 
<input type="number" placeholder="Enter Amount" value={RetentionAmountPrevious} onChange={(e) => setPrevRetentionAmount(parseFloat(e.target.value) || '')}/> 
<div>{formatNumber(RetentionAmountPrevious)}</div>
</td>
</tr>

{/* Subtotal B */}
<tr>
<td></td>
<td className="bold-green centered">Sub Total (B)</td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalB(BasicSalaryCurrent, HouseRentCurrent, UtilitiesCurrent, MedicalCurrent, lfaCurrent, AdjustmentForFuelCurrent,RetentionAmountCurrent))}</div></td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalB(BasicSalaryPrevious,HouseRentPrevious,UtilitiesPrevious,MedicalPrevious,lfaPrevious,AdjustmentForFuelPrevious, RetentionAmountPrevious))}</div></td>
</tr>

{/* Total A + B */}
<tr>
<td></td>
<td className="bold-blue centered">Total (A + B)</td>
<td className="bold-blue centered">{formatNumber(totalABCurrent())}</td>
<td className="bold-blue centered">{formatNumber(totalABPrevious())}</td>
</tr>



{/* Compensation C */}
<tr><td className="bold-black centered" colSpan={2}>Allowances </td><td></td><td></td></tr>


<tr>
<td>1</td>
<td>Allowance in lieu of second Car</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={asrCurrent} onChange={(e) => setasrCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(asrCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={asrPrevious} onChange={(e) => setasrPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(asrPrevious)}</div>
</td> 
</tr> 

<tr>
<td>2</td>
<td>Disturbance Allowance</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={daCurrent} onChange={(e) => setdaCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(daCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={daPrevious} onChange={(e) => setdaPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(daPrevious)}</div>
</td> 
</tr> 

<tr>
<td>3</td>
<td>Market Premium</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={mpCurrent} onChange={(e) => setmpCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(mpCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={mpPrevious} onChange={(e) => setmpPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(mpPrevious)}</div>
</td> 
</tr> 

<tr>
<td>4</td>
<td>Driver Salary (Allowance)</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={dsaCurrent} onChange={(e) => setdsaCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(dsaCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={dsaPrevious} onChange={(e) => setdsaPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(dsaPrevious)}</div>
</td> 
</tr> 

<tr>
<td>5</td>
<td>Servant</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={sCurrent} onChange={(e) => setsCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(sCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={sPrevious} onChange={(e) => setsPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(sPrevious)}</div>
</td> 
</tr> 

<tr>
<td>6</td>
<td>Tel (res)</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={resCurrent} onChange={(e) => setresCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(resCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={resPrevious} onChange={(e) => setresPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(resPrevious)}</div>
</td> 
</tr> 


<tr>
<td>7</td>
<td>Tel (cell)</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={cellCurrent} onChange={(e) => setcellCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(cellCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={cellPrevious} onChange={(e) => setcellPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(cellPrevious)}</div>
</td> 
</tr> 

<tr>
<td>8</td>
<td>Internet</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={iCurrent} onChange={(e) => setiCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(iCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={iPrevious} onChange={(e) => setiPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(iPrevious)}</div>
</td> 
</tr> 

<tr>
<td>9</td>
<td>Dearness Allowance</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={deaCurrent} onChange={(e) => setdeaCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(deaCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={deaPrevious} onChange={(e) => setdeaPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(deaPrevious)}</div>
</td> 
</tr> 

<tr>
<td>10</td>
<td>Project Allowance</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={paCurrent} onChange={(e) => setpaCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(paCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={paPrevious} onChange={(e) => setpaPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(paPrevious)}</div>
</td> 
</tr> 


{/* Subtotal C*/}
<tr>
<td></td>
<td className="bold-green centered">Sub Total (C)</td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalC(asrCurrent, daCurrent, mpCurrent, dsaCurrent, sCurrent, resCurrent, cellCurrent, iCurrent, deaCurrent, paCurrent))}</div></td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalC(asrPrevious, daPrevious, mpPrevious, dsaPrevious, sPrevious, resPrevious, cellPrevious, iPrevious, deaPrevious, paPrevious))}</div></td>
</tr>

{/* Total A + B + C*/}
<tr>
<td></td>
<td className="bold-blue centered">Total (A + B + C)</td>
<td className="bold-blue centered">{formatNumber(totalABCCurrent())}</td>
<td className="bold-blue centered">{formatNumber(totalABCPrevious())}</td>
</tr>

                    
{/* Compensation D */}
<tr><td className="bold-black centered" colSpan={2}>Variable Pay: </td><td></td><td></td></tr>

<tr>
<td>1</td>
<td>Variable Bonus</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={vbCurrent} onChange={(e) => setvbCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(vbCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={vbPrevious} onChange={(e) => setvbPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(vbPrevious)}</div>
</td> 
</tr> 

<tr>
<td>2</td>
<td>Special Milestone</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={smCurrent} onChange={(e) => setsmCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(smCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={smPrevious} onChange={(e) => setsmPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(smPrevious)}</div>
</td> 
</tr> 

{/* Subtotal D*/}
<tr>
<td></td>
<td className="bold-green centered">Sub Total (D)</td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalD(vbCurrent, smCurrent ))}</div></td>
<td className="bold-green centered"><div>{formatNumber(calculateSubTotalD(vbPrevious, smPrevious))}</div></td>
</tr>

{/* Total A + B + C + D*/}
<tr>
<td></td>
<td className="bold-blue centered">Total (A + B + C + D)</td>
<td className="bold-blue centered">{formatNumber(totalABCDCurrent())}</td>
<td className="bold-blue centered">{formatNumber(totalABCDPrevious())}</td>
</tr>


{/* Compensation E */}
<tr><td className="bold-black centered" colSpan={2}>Benefits </td><td></td><td></td></tr>

<tr>
<td>1</td>
<td>Car</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carCurrent} onChange={(e) => setcarCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carPrevious} onChange={(e) => setcarPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carPrevious)}</div>
</td> 
</tr> 

<tr>
<td>2</td>
<td>Car Insurance</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carInsuranceCurrent} onChange={(e) => setcarInsuranceCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carInsuranceCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carInsurancePrevious} onChange={(e) => setcarInsurancePrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carInsurancePrevious)}</div>
</td> 
</tr>     
           
<tr>
<td>3</td>
<td>Car Fuel</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carFuelCurrent} onChange={(e) => setcarFuelCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carFuelCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carFuelPrevious} onChange={(e) => setcarFuelPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carFuelPrevious)}</div>
</td> 
</tr>

<tr>
<td>4</td>
<td>Car Maintenance</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carMaintenanceCurrent} onChange={(e) => setcarMaintenanceCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carMaintenanceCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carMaintenancePrevious} onChange={(e) => setcarMaintenancePrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carMaintenancePrevious)}</div>
</td> 
</tr>                 

<tr>
<td>5</td>
<td>Car Reg / Road Tax</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carRegRoadTaxCurrent} onChange={(e) => setcarRegRoadTaxCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carRegRoadTaxCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={carRegRoadTaxPrevious} onChange={(e) => setcarRegRoadTaxPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(carRegRoadTaxPrevious)}</div>
</td> 
</tr>

<tr>
<td>6</td>
<td>Tracker</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={trackerCurrent} onChange={(e) => settrackerCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(trackerCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={trackerPrevious} onChange={(e) => settrackerPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(trackerPrevious)}</div>
</td>
</tr>

<tr>
<td>7</td>
<td>Company provided Travelling</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={companyProvidedTravelingCurrent} onChange={(e) => setcompanyProvidedTravelingCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(companyProvidedTravelingCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={companyProvidedTravelingPrevious} onChange={(e) => setcompanyProvidedTravelingPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(companyProvidedTravelingPrevious)}</div>
</td>
</tr>

<tr>
<td>8</td>
<td>Corporate Club Membership	</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={corporateClubMembershipCurrent} onChange={(e) => setcorporateClubMembershipCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(corporateClubMembershipCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={corporateClubMembershipPrevious} onChange={(e) => setcorporateClubMembershipPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(corporateClubMembershipPrevious)}</div>
</td>
</tr>

<tr>
<td>9</td>
<td>Club Subscription</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={clubSubscriptionCurrent} onChange={(e) => setclubSubscriptionCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(clubSubscriptionCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={clubSubscriptionPrevious} onChange={(e) => setclubSubscriptionPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(clubSubscriptionPrevious)}</div>
</td>
</tr>

<tr>
<td>10</td>
<td>Apartment rent</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={apartmentRentCurrent} onChange={(e) => setapartmentRentCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(apartmentRentCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={apartmentRentPrevious} onChange={(e) => setapartmentRentPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(apartmentRentPrevious)}</div>
</td>
</tr>

<tr>
<td>11</td>
<td>Hard Furnishings</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={hardFurnishingsCurrent} onChange={(e) => sethardFurnishingsCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(hardFurnishingsCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={hardFurnishingsPrevious} onChange={(e) => sethardFurnishingsPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(hardFurnishingsPrevious)}</div>
</td>
</tr>

<tr>
<td>12</td>
<td>Credit Cards / Statutory Contribution</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={creditCardsStatutoryContributionCurrent} onChange={(e) => setcreditCardsStatutoryContributionCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(creditCardsStatutoryContributionCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={creditCardsStatutoryContributionPrevious} onChange={(e) => setcreditCardsStatutoryContributionPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(creditCardsStatutoryContributionPrevious)}</div>
</td>  
</tr>

<tr>
<td>13</td>
<td>Other Perquisites</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={otherPerquisitesCurrent} onChange={(e) => setotherPerquisitesCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(otherPerquisitesCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={otherPerquisitesPrevious} onChange={(e) => setotherPerquisitesPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(otherPerquisitesPrevious)}</div>
</td> 
</tr>

<tr>
<td>14</td>
<td>Security Services / Guards</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={securityServicesGuardsCurrent} onChange={(e) => setsecurityServicesGuardsCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(securityServicesGuardsCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={securityServicesGuardsPrevious} onChange={(e) => setsecurityServicesGuardsPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(securityServicesGuardsPrevious)}</div>
</td>  
</tr>

<tr>
<td>15</td>
<td>Meal Subsidy / Housing Loan</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={mealSubsidyHousingLoanCurrent} onChange={(e) => setmealSubsidyHousingLoanCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(mealSubsidyHousingLoanCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={mealSubsidyHousingLoanPrevious} onChange={(e) => setmealSubsidyHousingLoanPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(mealSubsidyHousingLoanPrevious)}</div>
</td>  
</tr>
  
<tr>
<td>16</td>
<td>Entertainment Allowance	</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={entertainmentAllowanceCurrent} onChange={(e) => setentertainmentAllowanceCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(entertainmentAllowanceCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={entertainmentAllowancePrevious} onChange={(e) => setentertainmentAllowancePrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(entertainmentAllowancePrevious)}</div>
</td> 
</tr>

<tr>
<td>17</td>
<td>Leave Encashment</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={leaveEncashmentCurrent} onChange={(e) => setleaveEncashmentCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(leaveEncashmentCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={leaveEncashmentPrevious} onChange={(e) => setleaveEncashmentPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(leaveEncashmentPrevious)}</div>
</td> 
</tr>

<tr>
<td>18</td>
<td>Home Travel</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={homeTravelCurrent} onChange={(e) => sethomeTravelCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(homeTravelCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={homeTravelPrevious} onChange={(e) => sethomeTravelPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(homeTravelPrevious)}</div>
</td> 
</tr>

<tr>
<td>19</td>
<td>Group Life</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={groupLifeCurrent} onChange={(e) => setgroupLifeCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(groupLifeCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={groupLifePrevious} onChange={(e) => setgroupLifePrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(groupLifePrevious)}</div>
</td>
</tr>

<tr>
<td>20</td>
<td>Hospitalization Insurance (self, wife, children)	</td>
 
<td className="centered">
<input type="number" placeholder="Enter Amount" value={hospitalizationInsuranceCurrent} onChange={(e) => sethospitalizationInsuranceCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(hospitalizationInsuranceCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={hospitalizationInsurancePrevious} onChange={(e) => sethospitalizationInsurancePrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(hospitalizationInsurancePrevious)}</div>
</td>
</tr>

<tr>
<td>21</td>
<td>Medical (OPD)	</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={medicalOpdCurrent} onChange={(e) => setmedicalOpdCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(medicalOpdCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={medicalOpdPrevious} onChange={(e) => setmedicalOpdPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(medicalOpdPrevious)}</div>
</td>  
</tr>

<tr>
<td>22</td>
<td>Pension	</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={pensionCurrent} onChange={(e) => setpensionCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(pensionCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={pensionPrevious} onChange={(e) => setpensionPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(pensionPrevious)}</div>
</td> 
</tr>

<tr>
<td>23</td>
<td>PF</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={pfCurrent} onChange={(e) => setpfCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(pfCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={pfPrevious} onChange={(e) => setpfPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(pfPrevious)}</div>
</td> 
</tr>

<tr>
<td>24</td>
<td>EOBI</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={eobiCurrent} onChange={(e) => seteobiCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(eobiCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={eobiPrevious} onChange={(e) => seteobiPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(eobiPrevious)}</div>
</td>
</tr>

<tr>
<td>25</td>
<td>Gratuity</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={gratuityCurrent} onChange={(e) => setgratuityCurrent(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(gratuityCurrent)}</div>
</td>

<td className="centered">
<input type="number" placeholder="Enter Amount" value={gratuityPrevious} onChange={(e) => setgratuityPrevious(parseFloat(e.target.value) || '')}/>
<div>{formatNumber(gratuityPrevious)}</div>
</td>
</tr>

{/* SUB-TOTAL (E) */}
<tr>
<td></td>
<td className="bold-green centered">Sub Total (E)</td>
<td className="bold-green centered">
<div>{formatNumber(calculateSubTotalE
(
  carCurrent, carInsuranceCurrent, carFuelCurrent, carMaintenanceCurrent, carRegRoadTaxCurrent, trackerCurrent,
  companyProvidedTravelingCurrent, corporateClubMembershipCurrent, clubSubscriptionCurrent, apartmentRentCurrent,
  hardFurnishingsCurrent, creditCardsStatutoryContributionCurrent, otherPerquisitesCurrent, securityServicesGuardsCurrent, 
  mealSubsidyHousingLoanCurrent, entertainmentAllowanceCurrent, leaveEncashmentCurrent, homeTravelCurrent, groupLifeCurrent,
  hospitalizationInsuranceCurrent, medicalOpdCurrent, pensionCurrent, pfCurrent, eobiCurrent, gratuityCurrent
))}</div></td>

<td className="bold-green centered">
<div>{formatNumber(calculateSubTotalE
(
  carPrevious, carInsurancePrevious, carFuelPrevious,carMaintenancePrevious, carRegRoadTaxPrevious, trackerPrevious,
  companyProvidedTravelingPrevious, corporateClubMembershipPrevious, clubSubscriptionPrevious, apartmentRentPrevious,
  hardFurnishingsPrevious, creditCardsStatutoryContributionPrevious, otherPerquisitesPrevious, securityServicesGuardsPrevious,
  mealSubsidyHousingLoanPrevious, entertainmentAllowancePrevious, leaveEncashmentPrevious, homeTravelPrevious, groupLifePrevious,
  hospitalizationInsurancePrevious, medicalOpdPrevious, pensionPrevious, pfPrevious, eobiPrevious, gratuityPrevious
))}</div></td>
</tr>

{/* Total A + B + C + D + E*/}
<tr>
<td></td>
<td className="bold-blue centered">Total (A + B + C + D + E)</td>
<td className="bold-blue centered">{formatNumber(totalABCDECurrent())}</td>
<td className="bold-blue centered">{formatNumber(totalABCDEPrevious())}</td>
</tr>

<tr>
<td></td>
<td className="bold-black centered">Annual Package:</td>
<td className="centered">{formatNumber(annualPackageCurrent)}</td>
<td className="centered">{formatNumber(annualPackagePrevious)}</td>
</tr>

<tr>
<td></td>
<td className="bold-black centered">Compa-Ratio:</td>
<td className="centered">{formatNumber(compaRatioCurrent)}%</td>
<td className="centered">{formatNumber(compaRatioPrevious)}%</td>
</tr>
</tbody>
</table>
</div>
);

};
export default SmallCalculator;

// Isse mene remove lia tha SUB TOTAL (E) already calculated done
// const calculateSubTotalE = (
//   car, carInsurance, carFuel, carMaintenance, carRegRoadTax, tracker, companyProvidedTraveling,
//   corporateClubMembership, clubSubscription, apartmentRent, hardFurnishings, 
//   creditCardsStatutoryContribution, otherPerquisites,securityServicesGuards, 
//   mealSubsidyHousingLoan, entertainmentAllowance, leaveEncashment, homeTravel, groupLife, 
// hospitalizationInsurance, medicalOpd, pension, pf, eobi, gratuity
// ) => {
//   return (
//     parseInt(car) +
//     parseInt(carInsurance) +
//     parseInt(carFuel) +
//     parseInt(carMaintenance) +
//     parseInt(carRegRoadTax) + 
//     parseInt(tracker) + 
//     parseInt(companyProvidedTraveling) +
//     parseInt(corporateClubMembership) +
//     parseInt(clubSubscription) +
//     parseInt(apartmentRent) +
//     parseInt(hardFurnishings) +
//     parseInt(creditCardsStatutoryContribution) +
//     parseInt(otherPerquisites) +
//     parseInt(securityServicesGuards) +
//     parseInt(mealSubsidyHousingLoan) +
//     parseInt(entertainmentAllowance) +
//     parseInt(leaveEncashment) +
//     parseInt(homeTravel) +
//     parseInt(groupLife) +
//     parseInt(hospitalizationInsurance) +
//     parseInt(medicalOpd) +
//     parseInt(pension) +
//     parseInt(pf) +
//     parseInt(eobi) +
//     parseInt(gratuity)
//   );
// };

// import React, { useState } from 'react';
// import './SmallCalculator.css';

// const SmallCalculator = () => {
//   const [basicSalary, setBasicSalary] = useState('');
//   const [houseRentPercent, setHouseRentPercent] = useState('');
//   const [utilitiesPercent, setUtilitiesPercent] = useState('');
//   const [medicalPercent, setMedicalPercent] = useState('');
//   const [lfaPercent, setLfaPercent] = useState('');
//   const [adjustmentForFuel, setAdjustmentForFuel] = useState('');
//   const [retentionAmount, setRetentionAmount] = useState('');

//   // Separate states for Previous Company inputs
//   const [prevBasicSalary, setPrevBasicSalary] = useState('');
//   const [prevHouseRentPercent, setPrevHouseRentPercent] = useState('');
//   const [prevUtilitiesPercent, setPrevUtilitiesPercent] = useState('');
//   const [prevMedicalPercent, setPrevMedicalPercent] = useState('');
//   const [prevLfaPercent, setPrevLfaPercent] = useState('');
//   const [prevAdjustmentForFuel, setPrevAdjustmentForFuel] = useState('');
//   const [prevRetentionAmount, setPrevRetentionAmount] = useState('');

//   // Helper function to format numbers with commas
//   const formatNumber = (number) => {
//     return number.toLocaleString('en-US');
//   };

//   // Calculate the values based on percentages
//   const calculateValue = (percentage, salary) => {
//     return salary ? Math.round(salary * (percentage / 100)) : 0;
//   };

//   // Calculate subtotal B
//   const calculateSubTotalB = (salary, houseRent, utilities, medical) => {
//     return (
//       calculateValue(houseRent, salary) +
//       calculateValue(utilities, salary) +
//       calculateValue(medical, salary)
//     );
//   };

//   return (
//     <div>
//       <h2>Practice Calculator</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Compensation Breakdown</th>
//             <th className="centered">Current Company (PKR/Month)</th>
//             <th className="centered">Previous Company (PKR/Month)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Basic Salary */}
//           <tr>
//             <td>1</td>
//             <td>Basic Salary</td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Basic Salary</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={basicSalary}
//                 onChange={(e) => setBasicSalary(parseFloat(e.target.value) || '')}
//               />
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Basic Salary</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={prevBasicSalary}
//                 onChange={(e) => setPrevBasicSalary(parseFloat(e.target.value) || '')}
//               />
//             </td>
//           </tr>

//           {/* House Rent */}
//           <tr>
//             <td>2</td>
//             <td>House Rent (% of Basic)</td>
//             <td className="centered">
//               <div className="guidance-text">Enter your House Rent Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={houseRentPercent}
//                 onChange={(e) => setHouseRentPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(houseRentPercent, basicSalary))}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter your House Rent Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={prevHouseRentPercent}
//                 onChange={(e) => setPrevHouseRentPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(prevHouseRentPercent, prevBasicSalary))}</div>
//             </td>
//           </tr>

//           {/* Utilities */}
//           <tr>
//             <td>3</td>
//             <td>Utilities (% of Basic)</td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Utilities Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={utilitiesPercent}
//                 onChange={(e) => setUtilitiesPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(utilitiesPercent, basicSalary))}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Utilities Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={prevUtilitiesPercent}
//                 onChange={(e) => setPrevUtilitiesPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(prevUtilitiesPercent, prevBasicSalary))}</div>
//             </td>
//           </tr>

//           {/* Medical */}
//           <tr>
//             <td>4</td>
//             <td>Medical (% of Basic)</td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Medical Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={medicalPercent}
//                 onChange={(e) => setMedicalPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(medicalPercent, basicSalary))}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter your Medical Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={prevMedicalPercent}
//                 onChange={(e) => setPrevMedicalPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(prevMedicalPercent, prevBasicSalary))}</div>
//             </td>
//           </tr>

//           {/* LFA */}
//           <tr>
//             <td>5</td>
//             <td>LFA (% of Basic)</td>
//             <td className="centered">
//               <div className="guidance-text">Enter your LFA Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={lfaPercent}
//                 onChange={(e) => setLfaPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(lfaPercent, basicSalary))}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter your LFA Percentage</div>
//               <input
//                 type="number"
//                 placeholder="Enter Percentage"
//                 value={prevLfaPercent}
//                 onChange={(e) => setPrevLfaPercent(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(calculateValue(prevLfaPercent, prevBasicSalary))}</div>
//             </td>
//           </tr>

//           {/* Adjustment for Fuel */}
//           <tr>
//             <td>6</td>
//             <td>Adjustment for Fuel</td>
//             <td className="centered">
//               <div className="guidance-text">Enter Adjustment for Fuel</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={adjustmentForFuel}
//                 onChange={(e) => setAdjustmentForFuel(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(adjustmentForFuel)}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter Adjustment for Fuel</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={prevAdjustmentForFuel}
//                 onChange={(e) => setPrevAdjustmentForFuel(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(prevAdjustmentForFuel)}</div>
//             </td>
//           </tr>

//           {/* Retention Amount */}
//           <tr>
//             <td>7</td>
//             <td>Retention Amount</td>
//             <td className="centered">
//               <div className="guidance-text">Enter Retention Amount</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={retentionAmount}
//                 onChange={(e) => setRetentionAmount(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(retentionAmount)}</div>
//             </td>
//             <td className="centered">
//               <div className="guidance-text">Enter Retention Amount</div>
//               <input
//                 type="number"
//                 placeholder="Enter Amount"
//                 value={prevRetentionAmount}
//                 onChange={(e) => setPrevRetentionAmount(parseFloat(e.target.value) || '')}
//               />
//               <div>{formatNumber(prevRetentionAmount)}</div>
//             </td>
//           </tr>

//           {/* Subtotal */}
//           <tr>
//             <td>8</td>
//             <td>Subtotal B</td>
//             <td className="centered">
//               <div>{formatNumber(calculateSubTotalB(basicSalary, houseRentPercent, utilitiesPercent, medicalPercent))}</div>
//             </td>
//             <td className="centered">
//               <div>{formatNumber(calculateSubTotalB(prevBasicSalary, prevHouseRentPercent, prevUtilitiesPercent, prevMedicalPercent))}</div>
//             </td>
//           </tr>

          
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SmallCalculator;
