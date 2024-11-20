import React, { useState } from 'react';
import axios from 'axios';
import './form.css'
import DownloadButton from '../../components/pdfdownload/DownloadButton';
import Header from '../../components/header/Header';

const GmcForm = () => {
  const [formData, setFormData] = useState({
    clientname: '',
    clientaddress: '',
    policyperiod: {
      policystart: '',
      policyend: '',
    },
    insurername: '',
    tpaname: '',
    numberofemp: '',
    numberofdependency: '',
    totalnumberoflives: '',
    premiumperfamily: '',
    premiumperlife: '',
    premiumexcludinggst: '',
    exsuminsured: '',
    totalsuminsured: '',
    totalclaimspaidoutstanding: '',
    claimratio: '',
    calimsoutgo365: '',
    claimratio365: '',
    ibnr365days: '',
    familydefination: '',
    renewalnumberofemp: '',
    renewalnumberofdependency: '',
    renewaltotalnumberoflives: '',
    renewalsuminsured: '',
    renewaltotalsuminsured: '',
    renewalfamilydefination: '',
    totalclaimspaidoutstandingdate: '',
    totalclaimspaidoutstandingdays: '',
    ageband: '',


    suminsured: {
      enabled: false,
      suminsured: '',
    },
    roomrent: {
      enabled: false,
      normalroom: '',
      roomicu: '',
    },
    preandposthospitalization: {
      enabled: false,
      prehospitalization: '',
      posthospitalization: '',
    },
    maternity: {
      enabled: false,
      maternitynormaldelivery: '',
      maternitylscs: '',
    },
    preandpostnatal: {
      enabled: false,
      preandpostnatal: '',
    },
    toriclence: {
      enabled: false,
      toriclence: '',
    },
    lasiksurgery: {
      enabled: false,
      lasiksurgery: '',
    },
    corporatebuffer: {
      enabled: false,
      corporatebuffer: '',
      restrictedcorporatebuffer: '',
    },
    geneticdisorder: {
      enabled: false,
      geneticdisorderpercent: '',
      geneticdisorderinr: '',
    },
    domicillary: {
      enabled: false,
      domicillaryhospitalizationpercent: '',
      domicillaryhospitalizationinr: '',
    },

    ambulancecharges: {
      enabled: false,
      ambulancechargespercentage: '',
      ambulancechargesinr: '',
    },
    daycaretreatment: '',
    congentalinternaldiseases: {
      enabled: false,
    },
    congentalexternaldiseases: {
      enabled: false,
    },
    widoworwidowercover: {
      enabled: false,
    },
    dentaltreatment: {
      enabled: false,
    },
    hivandaids: {
      enabled: false,
      hivmentaldisorderpersentage: '',
      hivmentaldisorderinr: '',
    },
    claimsubmissionclause: {
      enabled: false,
    },
    moderntreatments: {
      enabled: false,
    },
    restrictiononcorporatebuffer: {
      enabled: false,
    },
    eligiblefamilymemberstousecorporatebuffer: {
      enabled: false,
    },
    eventrestriction: {
      enabled: false,
    },
    claimintimation: {
      enabled: false,
    },
    reimbursementclaimsreporting: {
      enabled: false,
    },
    tpa: {
      enabled: false,
    },
    animalseroentattack: {
      enabled: false,
      animalseroentattack: '',
    },
    treatmentforsleepapnea: {
      enabled: false,
      treatmentforsleepapnea: '',
    },
    avastinlucentsinjection: {
      enabled: false,
    },
    cyberknifetreatmentandroboticsurgery: {
      enabled: false,
    },
    wellmothercareexpenses: {
      enabled: false,
    },
    healthybabyexpenses: {
      enabled: false,
    },
    infertilitycover: {
      enabled: false,
    },
    incomprotectiorcover: {
      enabled: false,
      incomprotectiorcover: '',
    },
    surrogacyreproduction: {
      enabled: false,
    },
    prostheticappendages: {
      enabled: false,
    },
    extendedcancercare: {
      enabled: false,
      extendedcancercare: '',
    },
    homecaretreatmentdeclaredepidemic: {
      enabled: false,
    },
    automaticcoveragefor4and3child: {
      enabled: false,
    },
    specialconditions: {
      enabled: false,
    },
    oralchemotheraphy: {
      enabled: false,
    },
    oralmedication: {
      enabled: false,
      oralmedication: '',
    },
    corporatebuffereventrestriction: {
      enabled: false,
    },

  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked, dataset } = e.target;
    const group = dataset.group;



    let processedValue;
    if (type === 'checkbox') {
      processedValue = checked;
    } else if (type === 'date') {
      processedValue = value;
    } else {
      processedValue = value;
    }

    setFormData((prevData) => {
      let newData;
      if (group) {
        newData = {
          ...prevData,
          [group]: {
            ...prevData[group],
            [name]: processedValue,
          },
        };
      } else {
        newData = {
          ...prevData,
          [name]: processedValue,
        };
      }

      // Calculate total number of lives if relevant fields are updated
      if (name === 'numberofemp' || name === 'numberofdependency') {
        const numberofemp = parseInt(newData.numberofemp || prevData.numberofemp, 10) || 0;
        const numberofdependency = parseInt(newData.numberofdependency || prevData.numberofdependency, 10) || 0;

        newData.totalnumberoflives = (numberofemp + numberofdependency).toFixed(2);
      }

      if (name === 'numberofemp' || name === 'exsuminsured') {
        const numberofemp = parseInt(newData.numberofemp || prevData.numberofemp, 10) || 0;
        const exsuminsured = parseInt(newData.exsuminsured || prevData.exsuminsured, 10) || 0;

        newData.totalsuminsured = (numberofemp * exsuminsured).toFixed(2);
      }

      if (name === 'numberofemp' || name === 'premiumexcludinggst') {
        const numberofemp = parseInt(newData.numberofemp || prevData.numberofemp, 10) || 0;
        const premiumexcludinggst = parseInt(newData.premiumexcludinggst || prevData.premiumexcludinggst, 10) || 0;

        newData.premiumperfamily = (premiumexcludinggst / numberofemp).toFixed(2);
      }

      if (name === 'totalnumberoflives' || name === 'premiumexcludinggst') {
        const totalnumberoflives = parseInt(newData.totalnumberoflives || prevData.totalnumberoflives, 10) || 0;
        const premiumexcludinggst = parseInt(newData.premiumexcludinggst || prevData.premiumexcludinggst, 10) || 0;

        newData.premiumperlife = (premiumexcludinggst / totalnumberoflives).toFixed(2);
      }

      if (name === 'totalclaimspaidoutstanding' || name === 'premiumexcludinggst') {
        const totalclaimspaidoutstanding = parseInt(newData.totalclaimspaidoutstanding || prevData.totalclaimspaidoutstanding, 10) || 0;
        const premiumexcludinggst = parseInt(newData.premiumexcludinggst || prevData.premiumexcludinggst, 10) || 0;

        newData.claimratio = ((totalclaimspaidoutstanding / premiumexcludinggst) * 100).toFixed(2);
      }

      if (name === 'policyend' || name === 'totalclaimspaidoutstandingdate') {
        const policyend = new Date(newData.policyperiod.policyend || prevData.policyperiod.policyend);
        const totalclaimspaidoutstandingdate = new Date(newData.totalclaimspaidoutstandingdate || prevData.totalclaimspaidoutstandingdate);

        const differenceInTime = policyend.getTime() - totalclaimspaidoutstandingdate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

        newData.totalclaimspaidoutstandingdays = differenceInDays;
    }

      if (name === 'totalclaimspaidoutstanding' || name === 'totalclaimspaidoutstandingdays') {
        const totalclaimspaidoutstanding = parseInt(newData.totalclaimspaidoutstanding || prevData.totalclaimspaidoutstanding, 10) || 0;
        const totalclaimspaidoutstandingdays = parseInt(newData.totalclaimspaidoutstandingdays || prevData.totalclaimspaidoutstandingdays, 10) || 0;

        newData.calimsoutgo365 = (((totalclaimspaidoutstanding / 365) * totalclaimspaidoutstandingdays) + totalclaimspaidoutstanding).toFixed(2);
        newData.ibnr365days = (newData.calimsoutgo365 * 0.05).toFixed(2);
    }

      if ( name === 'premiumexcludinggst' || name === 'calimsoutgo365') {
        const calimsoutgo365 = parseInt(newData.calimsoutgo365 || prevData.calimsoutgo365, 10) || 0;
        const premiumexcludinggst = parseInt(newData.premiumexcludinggst || prevData.premiumexcludinggst, 10) || 0;

        newData.claimratio365 = ((calimsoutgo365 / premiumexcludinggst) * 100).toFixed(2);
      }

      if (name === 'renewalnumberofemp' || name === 'renewalsuminsured') {
        const renewalnumberofemp = parseInt(newData.renewalnumberofemp || prevData.renewalnumberofemp, 10) || 0;
        const renewalsuminsured = parseInt(newData.renewalsuminsured || prevData.renewalsuminsured, 10) || 0;

        newData.renewaltotalsuminsured = (renewalnumberofemp * renewalsuminsured).toFixed(2);
      }

      if (name === 'renewalnumberofemp' || name === 'renewalnumberofdependency') {
        const renewalnumberofemp = parseInt(newData.renewalnumberofemp || prevData.renewalnumberofemp, 10) || 0;
        const renewalnumberofdependency = parseInt(newData.renewalnumberofdependency || prevData.renewalnumberofdependency, 10) || 0;

        newData.renewaltotalnumberoflives = renewalnumberofemp + renewalnumberofdependency;
      }

      if (name === 'policystart') {
        const startDate = new Date(processedValue);
        const endDate = new Date(startDate);
        endDate.setFullYear(startDate.getFullYear() + 1);
        endDate.setDate(endDate.getDate() - 1);
        const formattedEndDate = endDate.toISOString().split('T')[0];

        newData.policyperiod = {
          ...newData.policyperiod,
          policyend: formattedEndDate,
        };
      }

      return newData;
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/insert-gmc', formData)
      .then(response => {
        console.log(response.data);
        alert('Data inserted successfully!');
        setIsSubmitted(true); // Set form as submitted to show the download button
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Failed to insert data.');
      });
  };


  return (
    <div>
      <Header />
      <main>
        <form className='gmcForm' onSubmit={handleSubmit}>
          <h1 className="gmcFormTitle">GROUP MEDICLAIM POLICY - RFQ</h1>


          <div className='Clent-info-grid-container'>
            <div className='clientNameContainer'>
              <span>
                <label className='clientName'>Name of the Client: </label>
              </span>
              <span>
                <input
                  className='clientNameInput'
                  type="text"
                  name="clientname"
                  value={formData.clientname}
                  onChange={handleInputChange}
                  required
                />
              </span>
            </div>
            <div className='addressContainer'>
              <span>
                <label className='address'>Address of the Client:</label>
              </span>
              <span>
                <input
                  className='clientAddressInput'
                  type="text"
                  name="clientaddress"
                  value={formData.clientaddress}
                  onChange={handleInputChange}
                  required
                />
              </span>
            </div>
          </div>

          <div className='expiringTitleSection'>
            <h3 className='expiringTitle'>Expering Policy Details</h3>

            <div className='expiringPolicyDetails'>

              <div className='row1-grid-container'>
                <div className='insurername-container'>
                  <span>
                    <label className='insurerName'>Insurer Name:</label>
                  </span>
                  <span>
                    <input
                      className='insurerNameInput'
                      type="text"
                      name="insurername"
                      value={formData.insurername}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='tpaName-container'>
                  <span>
                    <label className='tpaName'>TPA Name:</label>
                  </span>
                  <span>
                    <input
                      className='tpaNameInput'
                      type="text"
                      name="tpaname"
                      value={formData.tpaname}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>
              </div>

              <div className='policyPeriodContainer'>
                <label className='policyPeriod'>Policy Period</label>
                <label className='policyPeriodStart'>Start date:</label>
                <span>
                  <input
                    className='policyPeriodStartInput'
                    type="date"
                    name="policystart"
                    data-group="policyperiod"
                    value={formData.policyperiod.policystart || ''}
                    onChange={handleInputChange}
                  />
                </span>
                <label className='policyPeriodEnd'>End date:</label>
                <span>
                  <input
                    className='policyPeriodEndInput'
                    type="date"
                    name="policyend"
                    data-group="policyperiod"
                    value={formData.policyperiod.policyend || ''}
                    onChange={handleInputChange}
                  />
                </span>
              </div>




              <div className='row2-grid-container'>
                <div className='noOfEmp-container'>
                  <span>
                    <label className='noOfEmp'>No. of Employess:</label>
                  </span>
                  <span>
                    <input
                      className='noOfEmpInput'
                      type="number"
                      name="numberofemp"
                      value={formData.numberofemp}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='noOfDep-container'>
                  <span>
                    <label className='noOfDep'>No. of Dependency:</label>
                  </span>
                  <span>
                    <input
                      className='noOfDepInput'
                      type="number"
                      name="numberofdependency"
                      value={formData.numberofdependency}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='exSumInsured-container'>
                  <span>
                    <label className='exSumInsured'>Sum Insured:</label>
                  </span>
                  <span>
                    <input
                      className='exSumInsuredInput'
                      type="number"
                      name="exsuminsured"
                      value={formData.exsuminsured}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

              </div>

              <div className='row7-grid-container'>
              <div className='totalClaimPaid-container'>
                  <span>
                    <label className='totalClaimPaid'>Total claims paid +</label>
                    <label className='totalClaimPaid'> outstanding as on</label>
                    <span>
                      <input
                        className='totalclaimspaidoutstandingdate'
                        type="date"
                        name="totalclaimspaidoutstandingdate"
                        value={formData.totalclaimspaidoutstandingdate}
                        onChange={handleInputChange}
                      />
                      <label className='totalClaimPaid'>:</label>
                    </span>
                  </span>
                  <span>
                    <input
                      type="number"
                      className='totalClaimPaidInput'
                      name="totalclaimspaidoutstanding"
                      value={formData.totalclaimspaidoutstanding}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='premiumExcludingGst-container'>
                  <span>
                    <label className='premiumExcludingGst'>Premium Ex-GST:</label>
                  </span>
                  <span>
                    <input
                      className='premiumExcludingGstInput'
                      type="number"
                      name="premiumexcludinggst"
                      value={formData.premiumexcludinggst}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>
              </div>

              <div className='row3-grid-container'>
                <div className='premiumPerFamily-container'>
                  <span>
                    <label className='premiumPerFamily'>Premium per family:</label>
                  </span>
                  <span>
                    <input
                      className='premiumPerFamilyInput'
                      type="number"
                      name="premiumperfamily"
                      value={formData.premiumperfamily}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='premiumPerLife-container'>
                  <span>
                    <label className='premiumPerLife'>Premium per Life:</label>
                  </span>
                  <span>
                    <input
                      className='premiumPerLifeInput'
                      type="number"
                      name="premiumperlife"
                      value={formData.premiumperlife}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='noOfLives-container'>
                  <span>
                    <label className='noOfLives'>Total No. of Lives:</label>
                  </span>
                  <span>
                    <input
                      className='noOfLivesInput'
                      type="number"
                      name="totalnumberoflives"
                      value={formData.totalnumberoflives}
                      readOnly
                    />
                  </span>

                </div>


              </div>

              <div className='row4-grid-container'>
                <div className='totalSumInsured-container'>
                  <span>
                    <label className='totalSumInsured'>Total Sum Insured:</label>
                  </span>
                  <span>
                    <input
                      className='totalSumInsuredInput'
                      type="number"
                      name="totalsuminsured"
                      value={formData.totalsuminsured}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                



                <div className='claimRatio-container'>
                  <span>
                    <label className='claimRatio'>Claim Ratio:</label>
                  </span>
                  <span className='input-wrapper'>
                    <input
                      className='claimRatioInput'
                      type="number"
                      name="claimratio"
                      value={formData.claimratio}
                      onChange={handleInputChange}
                    />
                    <span className='input-suffix'>%</span>
                  </span>
                </div>

                <div className='ibnr-container'>
                  <span>
                    <label className='ibnr'>IBNR 365 days:</label>
                  </span>
                  <span>
                    <input
                      className='ibnrInput'
                      type="number"
                      name="ibnr365days"
                      value={formData.ibnr365days}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

              </div>

              <div className='row5-grid-container'>
                <div className='claimsOutgo-container'>
                  <span>
                    <label className='claimsOutgo'>Claims outgo </label><br />
                    <label className='claimsOutgo'>365 days:</label>
                  </span>
                  <span>
                    <input
                      className='claimsOutgoInput'
                      type="number"
                      name="calimsoutgo365"
                      value={formData.calimsoutgo365}
                      onChange={handleInputChange}
                    />
                  </span>
                </div>

                <div className='claimsRatio365-container'>
                  <span>
                    <label className='claimsRatio365'>Claim Ratio </label>
                    <label className='claimsRatio365'>365 days:</label>
                  </span>
                  <span className='input-wrapper'>
                    <input
                      className='claimsRatio365Input'
                      type="number"
                      name="claimratio365"
                      value={formData.claimratio365}
                      onChange={handleInputChange}
                    />
                    <span className='input-suffix2'>%</span>
                  </span>
                </div>
                
                
              </div>

              <div className='row6-grid-container'>
                <div className='familyDef-container'>
                  <label className='familyDef'>Family Definition:</label>
                  <select
                    className='familyDefSelect'
                    name="familydefination"
                    value={formData.familydefination}
                    onChange={handleInputChange}
                  >
                    <option value="Self Only">Self Only</option>
                    <option value="(1+3) Self + Spouse + 2 Dependent Children up to the age of 25years">
                      (1+3) Self + Spouse + 2 Dependent Children up to the age of 25 years
                    </option>
                    <option value="(1+5) Self + Spouse + 2 Dependent Children upto the age of 25years + 2 Dependent Parents">
                      (1+5) Self + Spouse + 2 Dependent Children up to the age of 25 years + 2 Dependent Parents
                    </option>
                    <option value="(1+5) Self + Spouse + 2 Dependent Children + 2 Dependent Parents / In Laws (Combinations are not allowed)">
                      (1+5) Self + Spouse + 2 Dependent Children + 2 Dependent Parents / In Laws <br />
                      (Combinations are not allowed)
                    </option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <div className='renewalPolicyDetailsSection'>
            <h3 className='renewalPolicyDetails'>Renewal Policy Details</h3>

            <div className='renewalRow1-grid-container'>
              <div className='renewalNumberOfEmp-container'>
                <span>
                  <label className='renewalNumberOfEmp'>No. of Employess:</label>
                </span>
                <span>
                  <input
                    className='renewalNumberOfEmpInput'
                    type="number"
                    name="renewalnumberofemp"
                    value={formData.renewalnumberofemp}
                    onChange={handleInputChange}
                  />
                </span>
              </div>

              <div className='renewalNumberOfDep-container'>
                <span>
                  <label className='renewalNumberOfDep'>No. Of Dependent:</label>
                </span>
                <span>
                  <input
                    className='renewalNumberOfDepInput'
                    type="number"
                    name="renewalnumberofdependency"
                    value={formData.renewalnumberofdependency}
                    onChange={handleInputChange}
                  />
                </span>
              </div>
            </div>

            <div className='renewalRow2-grid-container'>

              <div className='renewalSumInsured-container'>
                <span>
                  <label className='renewalSumInsured'>Sum Insured:</label>
                </span>
                <span>
                  <input
                    className='renewalSumInsuredInput'
                    type="number"
                    name="renewalsuminsured"
                    value={formData.renewalsuminsured}
                    onChange={handleInputChange}
                  />
                </span>
              </div>

              <div className='renewalTotalNumberOfLives-container'>
                <span>
                  <label className='renewalTotalNumberOfLives'>Total number of Lives:</label>
                </span>
                <span>
                  <input
                    className='renewalTotalNumberOfLivesInput'
                    type="number"
                    name="renewaltotalnumberoflives"
                    value={formData.renewaltotalnumberoflives}
                    readOnly
                  />
                </span>
              </div>

              <div className='renewalTotalSumInsured-container'>
                <span>
                  <label className='renewalTotalSumInsured'>Total Sum Insured:</label>
                </span>
                <span>
                  <input
                    className='renewalTotalSumInsuredInput'
                    type="number"
                    name="renewaltotalsuminsured"
                    value={formData.renewaltotalsuminsured}
                    onChange={handleInputChange}
                  />
                </span>
              </div>
            </div>


            <div className='renewalrow3-grid-container'>
              <div className='renewalFamilyDef-container'>
                <label className='renewalFamilyDef'>Family Definition:</label>
                <select
                  className='renewalFamilyDefSelect'
                  name="renewalfamilydefination"
                  value={formData.renewalfamilydefination}
                  onChange={handleInputChange}
                >
                  <option value="Self Only">Self Only</option>
                  <option value="(1+3) Self + Spouse + 2 Dependent Children up to the age of 25years">
                    (1+3) Self + Spouse + 2 Dependent Children up to the age of 25 years
                  </option>
                  <option value="(1+5) Self + Spouse + 2 Dependent Children upto the age of 25years + 2 Dependent Parents">
                    (1+5) Self + Spouse + 2 Dependent Children up to the age of 25 years + 2 Dependent Parents
                  </option>
                  <option value="(1+5) Self + Spouse + 2 Dependent Children + 2 Dependent Parents / In Laws (Combinations are not allowed)">
                    (1+5) Self + Spouse + 2 Dependent Children + 2 Dependent Parents / In Laws <br />
                    (Combinations are not allowed)
                  </option>
                </select>
              </div>
            </div>

          </div>

          <div className='requiredDataChangesSection'>
            <h3 className='requiredDataChanges'>Enter the data if any changes required</h3>
            <div className='requiredDataChanges-section'>

              <div className='ageband-container'>
                <label className='ageband'>Ageband:</label>
                <select
                  className='agebandSelect'
                  name="ageband"
                  value={formData.ageband}
                  onChange={handleInputChange}
                >
                  <option value="Age Band 0-65 years">0-65 years</option>
                  <option value="Age Band 0-80 years">0-80 years</option>
                  <option value="Age Band 0-90 years">0-90 years</option>
                  <option value="Age Band 0-99 years">0-99 years</option>
                </select>
              </div>



              <div className='rSumInsured-container'>
                <h3 className='rSumInsured'>Sum Insured:</h3>
                <label>
                  <input
                    className='enabledCheckbox2'
                    type="checkbox"
                    name="enabled"
                    data-group="suminsured"
                    checked={formData.suminsured.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rSumInsuredContent'>Family Floater Sum Insured of INR </label>
                </label>
                <input
                  className='rSumInsuredContentInput'
                  type="number"
                  name="suminsured"
                  data-group="suminsured"
                  value={formData.suminsured.suminsured}
                  onChange={handleInputChange}
                  disabled={!formData.suminsured.enabled}
                />
                <label className='rSumInsuredContent'>/-.</label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Room Rent for Normal and ICU:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox2'
                    type="checkbox"
                    name="enabled"
                    data-group="roomrent"
                    checked={formData.roomrent.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Normal Room </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="normalroom"
                  data-group="roomrent"
                  value={formData.roomrent.normalroom}
                  onChange={handleInputChange}
                  disabled={!formData.roomrent.enabled}
                />

                <label className='twoInputCheckboxContent'>% and ICU </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="roomicu"
                  data-group="roomrent"
                  value={formData.roomrent.roomicu}
                  onChange={handleInputChange}
                  disabled={!formData.roomrent.enabled}
                />
                <label className='twoInputCheckboxContent'>%.</label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Pre and Post Hospitalization:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox3'
                    type="checkbox"
                    name="enabled"
                    data-group="preandposthospitalization"
                    checked={formData.preandposthospitalization.enabled}
                    onChange={handleInputChange}
                  />

                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="prehospitalization"
                  data-group="preandposthospitalization"
                  value={formData.preandposthospitalization.prehospitalization}
                  onChange={handleInputChange}
                  disabled={!formData.preandposthospitalization.enabled}
                />
                <label className='twoInputCheckboxContent'> days pre-hospitalization and </label>

                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="posthospitalization"
                  data-group="preandposthospitalization"
                  value={formData.preandposthospitalization.posthospitalization}
                  onChange={handleInputChange}
                  disabled={!formData.preandposthospitalization.enabled}
                />
                <label className='twoInputCheckboxContent'> days post-hospitalization respectively.</label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Maternity:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox4'
                    type="checkbox"
                    name="enabled"
                    data-group="maternity"
                    checked={formData.maternity.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Normal Delivery Rs </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="maternitynormaldelivery"
                  data-group="maternity"
                  value={formData.maternity.maternitynormaldelivery}
                  onChange={handleInputChange}
                  disabled={!formData.maternity.enabled}
                />

                <label className='twoInputCheckboxContent'>/- LSCS Rs </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="maternitylscs"
                  data-group="maternity"
                  value={formData.maternity.maternitylscs}
                  onChange={handleInputChange}
                  disabled={!formData.maternity.enabled}
                />
                <label className='twoInputCheckboxContent'>/-.</label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Well Mother Care expenses:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox16'
                    type="checkbox"
                    name="enabled"
                    data-group="wellmothercareexpenses"
                    checked={formData.wellmothercareexpenses.enabled}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='oneCheckbox-content'>Cover the room rent for mother who is required to feed the baby post birth if the new born baby is hospitalized and up to age of 5 years<br /> within the Family Floater Sum Insured.</label>

              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Healthy Baby expenses:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox17'
                    type="checkbox"
                    name="enabled"
                    data-group="healthybabyexpenses"
                    checked={formData.healthybabyexpenses.enabled}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='oneCheckbox-content'>Cover the Expenses Incurred for a Normal baby after the birth till discharge within the  Maternity limit. To ensure the necessary expenses <br />related to wellbeing after birth and before discharge. (Expenses like doctors check up and any other check up / tests performed to <br />ensure that the baby is well at birth).</label>

              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Infertility cover</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox18'
                    type="checkbox"
                    name="enabled"
                    data-group="infertilitycover"
                    checked={formData.infertilitycover.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered on OPD / IPD Diagnosis and treatment  within maternity limit.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Surrogacy / Assisted Reproduction:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox19'
                    type="checkbox"
                    name="enabled"
                    data-group="surrogacyreproduction"
                    checked={formData.surrogacyreproduction.enabled}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Prosthetic Appendages:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox20'
                    type="checkbox"
                    name="enabled"
                    data-group="prostheticappendages"
                    checked={formData.prostheticappendages.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Cost of the Prosthetic limb will be covered within the FFSI, corporate buffer not applicable.</label>
                </label>
              </div>

              <div className='rPreAndPostNatal-container'>
                <h3 className='rPreAndPostNatal'>Pre and Post Natal:</h3>
                <label>
                  <input
                    className='enabledCheckbox3'
                    type="checkbox"
                    name="enabled"
                    data-group="preandpostnatal"
                    checked={formData.preandpostnatal.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rPreAndPostNatalContent'>Expenses covered up to </label>
                </label>
                <input
                  className='rPreAndPostNatalContentInput'
                  type="number"
                  name="preandpostnatal"
                  data-group="preandpostnatal"
                  value={formData.preandpostnatal.preandpostnatal}
                  onChange={handleInputChange}
                  disabled={!formData.preandpostnatal.enabled}
                />
                <label className='rPreAndPostNatalContent'>/- within the maternity limit OPD & IPD basis </label>
              </div>

              <div className='rTroicLence-container'>
                <h3 className='rTroicLence'>Toric Lence:</h3>
                <label>
                  <input
                    className='enabledCheckbox4'
                    type="checkbox"
                    name="enabled"
                    data-group="toriclence"
                    checked={formData.toriclence.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rTroicLenceContent'>Covered upto INR </label>
                </label>
                <input
                  className='rTroicLenceContentInput'
                  type="number"
                  name="toriclence"
                  data-group="toriclence"
                  value={formData.toriclence.toriclence}
                  onChange={handleInputChange}
                  disabled={!formData.toriclence.enabled}
                />
                <label className='rTroicLenceContent'>/- per eye.</label>
              </div>

              <div className='rLasikSurgery-container'>
                <h3 className='rLasikSurgery'>Lasik Surgery:</h3>
                <label>
                  <input
                    className='enabledCheckbox5'
                    type="checkbox"
                    name="enabled"
                    data-group="lasiksurgery"
                    checked={formData.lasiksurgery.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rLasikSurgeryContent'>Covered if the Power of the Eye is +/- </label>
                </label>
                <input
                  className='rLasikSurgeryContentInput'
                  type="number"
                  name="lasiksurgery"
                  data-group="lasiksurgery"
                  value={formData.lasiksurgery.lasiksurgery}
                  onChange={handleInputChange}
                  disabled={!formData.toriclence.enabled}
                />
                <label className='rLasikSurgeryContent'>.</label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Corporate Buffer:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox5'
                    type="checkbox"
                    name="enabled"
                    data-group="corporatebuffer"
                    checked={formData.corporatebuffer.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Rs </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="corporatebuffer"
                  data-group="corporatebuffer"
                  value={formData.corporatebuffer.corporatebuffer}
                  onChange={handleInputChange}
                  disabled={!formData.corporatebuffer.enabled}
                />

                <label className='twoInputCheckboxContent'>/- Ristercted to SI Rs </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="restrictedcorporatebuffer"
                  data-group="corporatebuffer"
                  value={formData.corporatebuffer.restrictedcorporatebuffer}
                  onChange={handleInputChange}
                  disabled={!formData.corporatebuffer.enabled}
                />
                <label className='twoInputCheckboxContent'>/-.</label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Restriction On Corporate Buffer: </h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox8'
                    type="checkbox"
                    name="enabled"
                    data-group="restrictiononcorporatebuffer"
                    checked={formData.restrictiononcorporatebuffer.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Restricted to family floater sum insured.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Eligible family members to use<br />Corporate Buffer:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox9'
                    type="checkbox"
                    name="enabled"
                    data-group="eligiblefamilymemberstousecorporatebuffer"
                    checked={formData.eligiblefamilymemberstousecorporatebuffer.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>All family members.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <label className='oneCheckbox-header'>Corporate Buffer Event Restriction.</label>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox25'
                    type="checkbox"
                    name="enabled"
                    data-group="corporatebuffereventrestriction"
                    checked={formData.corporatebuffereventrestriction.enabled}
                    onChange={handleInputChange}
                  />

                </label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Genetic Disorder:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox6'
                    type="checkbox"
                    name="enabled"
                    data-group="geneticdisorder"
                    checked={formData.geneticdisorder.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Up to </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="geneticdisorderpercent"
                  data-group="geneticdisorder"
                  value={formData.geneticdisorder.geneticdisorderpercent}
                  onChange={handleInputChange}
                  disabled={!formData.geneticdisorder.enabled}
                />

                <label className='twoInputCheckboxContent'>% of Sum insured or up to INR </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="geneticdisorderinr"
                  data-group="geneticdisorder"
                  value={formData.geneticdisorder.geneticdisorderinr}
                  onChange={handleInputChange}
                  disabled={!formData.geneticdisorder.enabled}
                />
                <label className='twoInputCheckboxContent'>/- which ever is lower.</label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Domicillary Hospitalization:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox7'
                    type="checkbox"
                    name="enabled"
                    data-group="domicillary"
                    checked={formData.domicillary.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Covered up to </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="domicillaryhospitalizationpercent"
                  data-group="domicillary"
                  value={formData.domicillary.domicillaryhospitalizationpercent}
                  onChange={handleInputChange}
                  disabled={!formData.domicillary.enabled}
                />

                <label className='twoInputCheckboxContent'>% of SI, Maximum is Rs </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="domicillaryhospitalizationinr"
                  data-group="domicillary"
                  value={formData.domicillary.domicillaryhospitalizationinr}
                  onChange={handleInputChange}
                  disabled={!formData.domicillary.enabled}
                />
                <label className='twoInputCheckboxContent'>/- depending upon the doctor's approval.</label>
              </div>

              <div className='rDayCareTreatment-container'>
                <label className='rDayCareTreatment'>Day Care Treatment:</label>
                <select
                  className='rDayCareTreatmentSelect'
                  name="daycaretreatment"
                  value={formData.daycaretreatment}
                  onChange={handleInputChange}
                >
                  <option value="Listed Day care Procedures.">
                    Listed Day care Procedures.
                  </option>
                  <option value="Any day care procedure covered with/without pre-auth in-network or non-network hospital.">
                    Any day care procedure covered with/without pre-auth in-network or non-network hospital.
                  </option>
                </select>
              </div>


              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>Ambulance Charges:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox8'
                    type="checkbox"
                    name="enabled"
                    data-group="ambulancecharges"
                    checked={formData.ambulancecharges.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='twoInputCheckboxContent'>Emergency ambulance charges up-to </label>
                </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="ambulancechargespercentage"
                  data-group="ambulancecharges"
                  value={formData.ambulancecharges.ambulancechargespercentage}
                  onChange={handleInputChange}
                  disabled={!formData.ambulancecharges.enabled}
                />

                <label className='twoInputCheckboxContent'>% of a sum insured or upto Rs </label>
                <input
                  className='twoInputCheckboxContentInput'
                  type="number"
                  name="ambulancechargesinr"
                  data-group="ambulancecharges"
                  value={formData.ambulancecharges.ambulancechargesinr}
                  onChange={handleInputChange}
                  disabled={!formData.ambulancecharges.enabled}
                />
                <label className='twoInputCheckboxContent'>/- which ever is less.</label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Congental internal diseases:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox2'
                    type="checkbox"
                    name="enabled"
                    data-group="congentalinternaldiseases"
                    checked={formData.congentalinternaldiseases.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered for all.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Congental external diseases:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox3'
                    type="checkbox"
                    name="enabled"
                    data-group="congentalexternaldiseases"
                    checked={formData.congentalexternaldiseases.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered in Life threatening condition only.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Widow or Widower diseases:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox4'
                    type="checkbox"
                    name="enabled"
                    data-group="widoworwidowercover"
                    checked={formData.widoworwidowercover.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Continuation of dependents coverage in case of death of an employee during the course of the policy .</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Dental Treatment:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox5'
                    type="checkbox"
                    name="enabled"
                    data-group="dentaltreatment"
                    checked={formData.dentaltreatment.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered if due to accident requiring hospitalization.</label>
                </label>
              </div>

              <div className='twoInputCheckbox-container'>
                <h3 className='twoInputCheckbox-header'>HIV / AIDS / Mental Cover:</h3>
                <label>
                  <input
                    className='twoInputCheckbox-enabledCheckbox9'
                    type="checkbox"
                    name="enabled"
                    data-group="hivandaids"
                    checked={formData.hivandaids.enabled}
                    onChange={handleInputChange}
                  />

                </label>
                <label className='twoInputCheckboxContent'>Covered</label>
                <span>
                  <input
                    className='twoInputCheckboxContentInput'
                    type="number"
                    name="hivmentaldisorderpersentage"
                    data-group="hivandaids"
                    value={formData.hivandaids.hivmentaldisorderpersentage}
                    onChange={handleInputChange}
                    disabled={!formData.hivandaids.enabled}
                  />

                  <label className='twoInputCheckboxContent'>% of Sum insured or</label>
                  <input
                    className='twoInputCheckboxContentInput'
                    type="number"
                    name="hivmentaldisorderinr"
                    data-group="hivandaids"
                    value={formData.hivandaids.hivmentaldisorderinr}
                    onChange={handleInputChange}
                    disabled={!formData.hivandaids.enabled}
                  />
                  <label className='twoInputCheckboxContent'>/- which ever is lower. Corporate buffer can't be utilized for these claims.</label>
                </span>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Claim Submission clause:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox6'
                    type="checkbox"
                    name="enabled"
                    data-group="claimsubmissionclause"
                    checked={formData.claimsubmissionclause.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Claim must be filed within 30 days from the date of discharge from the Hospital.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Modern Treatments:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox7'
                    type="checkbox"
                    name="enabled"
                    data-group="moderntreatments"
                    checked={formData.moderntreatments.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>IRDAI specified Modern Treatments covered.</label>
                </label>
              </div>

              

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Event Restriction:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox10'
                    type="checkbox"
                    name="enabled"
                    data-group="eventrestriction"
                    checked={formData.eventrestriction.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Provision to cover 3rd & 4th Child considering if the employee is blessed with twins or triplets in the 1st or 2nd event of delivery.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Claims Intimation:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox11'
                    type="checkbox"
                    name="enabled"
                    data-group="claimintimation"
                    checked={formData.claimintimation.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>No Claims intimation required for reimbursement claims & Day Care procedure claims.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Re-imbursement Claims Reporting<br /> / Submitting Period:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox12'
                    type="checkbox"
                    name="enabled"
                    data-group="reimbursementclaimsreporting"
                    checked={formData.reimbursementclaimsreporting.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Claim reporting /submission period within 30 days from the Date of Discharge.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Third Party Administrator (TPA):</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox13'
                    type="checkbox"
                    name="enabled"
                    data-group="tpa"
                    checked={formData.tpa.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>AS PER THE INSURER CHOICE.</label>
                </label>
              </div>

              <div className='rAnimal-container'>
                <h3 className='rAnimal'>Animal Serpent attack:</h3>
                <label>
                  <input
                    className='enabledCheckbox6'
                    type="checkbox"
                    name="enabled"
                    data-group="animalseroentattack"
                    checked={formData.animalseroentattack.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rAnimalContent'>Resulting in treatment on in-patient or out-patient basis, sub limited to a maximum of INR </label>
                </label>
                <input
                  className='rAnimalContentInput'
                  type="number"
                  name="animalseroentattack"
                  data-group="animalseroentattack"
                  value={formData.animalseroentattack.animalseroentattack}
                  onChange={handleInputChange}
                  disabled={!formData.animalseroentattack.enabled}
                />
                <label className='rAnimalContent'>/- on each and every claim.</label>
              </div>

              <div className='rSleepApnea-container'>
                <h3 className='rSleepApnea'>Treatment for sleep apnea:</h3>
                <label>
                  <input
                    className='enabledCheckbox7'
                    type="checkbox"
                    name="enabled"
                    data-group="treatmentforsleepapnea"
                    checked={formData.treatmentforsleepapnea.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rSleepApneaContent'>Coverd upto INR </label>
                </label>
                <input
                  className='rSleepApneaContentInput'
                  type="number"
                  name="treatmentforsleepapnea"
                  data-group="treatmentforsleepapnea"
                  value={formData.treatmentforsleepapnea.treatmentforsleepapnea}
                  onChange={handleInputChange}
                  disabled={!formData.treatmentforsleepapnea.enabled}
                />
                <label className='rSleepApneaContent'>/-.</label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Avastin / Lucents Injection:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox14'
                    type="checkbox"
                    name="enabled"
                    data-group="avastinlucentsinjection"
                    checked={formData.avastinlucentsinjection.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered for all.</label>
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Cyber Knife treatment and <br />Robotic Surgery:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox15'
                    type="checkbox"
                    name="enabled"
                    data-group="cyberknifetreatmentandroboticsurgery"
                    checked={formData.cyberknifetreatmentandroboticsurgery.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered for all.</label>
                </label>
              </div>

              

              <div className='rIncomeProtector-container'>
                <h3 className='rIncomeProtector'>Income protector cover -<br /> Loss of wages due to illness:</h3>
                <label>
                  <input
                    className='enabledCheckbox8'
                    type="checkbox"
                    name="enabled"
                    data-group="incomprotectiorcover"
                    checked={formData.incomprotectiorcover.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rIncomeProtectorContent'>Covered subject to “Actual Loss Of Pay or Rs </label>
                </label>
                <input
                  className='rIncomeProtectorContentInput'
                  type="number"
                  name="incomprotectiorcover"
                  data-group="incomprotectiorcover"
                  value={formData.incomprotectiorcover.incomprotectiorcover}
                  onChange={handleInputChange}
                  disabled={!formData.incomprotectiorcover.enabled}
                />
                <label className='rIncomeProtectorContent'>/- whichever is lower for 6 months.</label>
              </div>
              <br />
              <br />

              

              <div className='rExtendCancer-container'>
                <h3 className='rExtendCancer'>Extended Cancer care:</h3>
                <label>
                  <input
                    className='enabledCheckbox9'
                    type="checkbox"
                    name="enabled"
                    data-group="extendedcancercare"
                    checked={formData.extendedcancercare.enabled}
                    onChange={handleInputChange}
                  />

                </label>
                <span>
                  <label className='rExtendCancerContent'>Complete Blood Count (CBC)/ PET scans / ONCO Scans and other follow up tests including patients in remission sublimated to Rs </label>
                  <input
                    className='rExtendCancerContentInput'
                    type="number"
                    name="extendedcancercare"
                    data-group="extendedcancercare"
                    value={formData.extendedcancercare.extendedcancercare}
                    onChange={handleInputChange}
                    disabled={!formData.extendedcancercare.enabled}
                  />
                  <label className='rExtendCancerContent'>/- per incident.</label>
                </span>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Home care treatment in case of <br />declared Epidemic or Quarantine:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox21'
                    type="checkbox"
                    name="enabled"
                    data-group="homecaretreatmentdeclaredepidemic"
                    checked={formData.homecaretreatmentdeclaredepidemic.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Covered for all.</label>
                </label>
              </div>



              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Automatic coverage for 4th and 3rd child:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox22'
                    type="checkbox"
                    name="enabled"
                    data-group="automaticcoveragefor4and3child"
                    checked={formData.automaticcoveragefor4and3child.enabled}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Special Conditions:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox23'
                    type="checkbox"
                    name="enabled"
                    data-group="specialconditions"
                    checked={formData.specialconditions.enabled}
                    onChange={handleInputChange}
                  />
                </label>
              </div>


              <div className='oneCheckbox-container'>
                <h3 className='oneCheckbox-header'>Oral Chemotheraphy:</h3>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox24'
                    type="checkbox"
                    name="enabled"
                    data-group="oralchemotheraphy"
                    checked={formData.oralchemotheraphy.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='oneCheckbox-content'>Oral Chemotheraphy</label>
                </label>
              </div>

              <div className='rOralMedication-container'>
                <h3 className='rOralMedication'>Oral Medication / Drugs:</h3>
                <label>
                  <input
                    className='enabledCheckbox10'
                    type="checkbox"
                    name="enabled"
                    data-group="oralmedication"
                    checked={formData.oralmedication.enabled}
                    onChange={handleInputChange}
                  />
                  <label className='rOralMedicationContent'>Covered up to Rs </label>
                </label>
                <input
                  className='rOralMedicationContentInput'
                  type="number"
                  name="oralmedication"
                  data-group="oralmedication"
                  value={formData.oralmedication.oralmedication}
                  onChange={handleInputChange}
                  disabled={!formData.oralmedication.enabled}
                />
                <label className='rOralMedicationContent'>/- per family on OPD basis, subject to the below conditions </label>
              </div>

              <div className='oneCheckbox-container'>
                <label className='oneCheckbox-header'>Corporate Buffer Event Restriction.</label>
                <label>
                  <input
                    className='oneCheckbox-enabledCheckbox25'
                    type="checkbox"
                    name="enabled"
                    data-group="corporatebuffereventrestriction"
                    checked={formData.corporatebuffereventrestriction.enabled}
                    onChange={handleInputChange}
                  />

                </label>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="buttons-wrapper">
            <div className="button-container">
              {!isSubmitted && (
                <button className='gmcFormSubmit' type="submit">Submit</button>
              )}
            </div>
          </div>
        </form>

        {isSubmitted && formData && (
          <div className="buttons-wrapper">
            <div className="button-container">
              <DownloadButton data={formData} className="download-button" />
            </div>
          </div>
        )}


      </main>
    </div>
  );
};

export default GmcForm;
