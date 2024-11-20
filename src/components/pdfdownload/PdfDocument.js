import React from 'react';
import '../../components/components.css';
import logo from '../../images/logo.png';
import { Page, Text, View, Document, StyleSheet, Image, Font, Svg, Path } from '@react-pdf/renderer';

// Register the fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helvetica/NeueLTStd-Light.otf' },
    { src: 'https://fonts.gstatic.com/s/helvetica/NeueLTStd-Bold.otf', fontWeight: 'bold' }
  ]
});


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 10,
  },
  logo: {
    width: 225,
    height: 45,
  },

  header: {
    display: "flex",
    justifyContent: "center",
  },

  tableHeading: {
    fontSize: "10px",
    fontWeight: "bold",
    marginLeft: "20",
  },

  address: {
    marginLeft: "50%",
    fontSize: "7px",
    fontWeight: "normal",
    textAlign: 'right',
  },

  horizontalLine: {
    marginVertical: 10,
    height: 1,
    backgroundColor: '#000000',
  },

  break: {
    marginBottom: 10,
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: "85px",
  },

  paraHeading: {
    fontSize: "15px",
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#0000FF",
  },

  tableMainHeading: {
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
  },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: 10,
  },

  tableRowMainHeader: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
  },

  tableCol1RowMain2Header: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
  },

  tableCol2RowMain2Header: {
    width: "35%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
  },

  tableCol3RowMain2Header: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
  },

  tableCol4RowMain2Header: {
    width: "35%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ADD8E6',
    textAlign: 'center',
  },

  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },

  tableRow2: {

  },

  tableColHeader: {
    width: "40%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    paddingLeft: 4,
  },
  tableCol: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'left',
    paddingLeft: 4,
  },
  tableCellHeader: {
    margin: 2,
    fontSize: '10px',
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 2,
    fontSize: '11px',
  },

  table2ColMainHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'left',
  },

  table2Col1MainHeader: {
    width: "30%",
    borderStyle: "solid",
    borderColor: '#000000',
    textAlign: 'left',
  },

  table2Col2MainHeader: {
    width: "15%",
    borderStyle: "solid",
    borderColor: '#000000',
    textAlign: 'left',
  },

  table2Col3MainHeader: {
    width: "35%",
    borderStyle: "solid",
    borderColor: '#000000',
    textAlign: 'left',
  },


  table2ColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    textAlign: 'left',
    paddingLeft: 4,
  },

  table2Col1: {
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'left',
    paddingLeft: 4,
  },

  table2Col2: {
    width: "15%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'left',
    paddingLeft: 4,
  },

  table2Col3: {
    width: "35%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'left',
    paddingLeft: 4,
  },

  tableBreak: {
    margin: 10,
    fontSize: 12,
    textAlign: 'center',
    color: 'red'
  },

});

const PdfDocument = ({ data }) => {
  const policyperiod = data.policyperiod || {};



  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.flexRow}>
            <Image style={styles.logo} src={logo} ></Image>
            <Text style={styles.address}>#18, 3rd Cross, RMV 2nd Stage, 4th Block, MLA Layout,{"\n"}
              Lottegollahalli, Sanjaynagar, Bengaluru - 560094.{"\n"}
              www.iproinfinity.com{"\n"}
              Email: customerfirst@iproinfinity.com{"\n"}
              Phone No. 080 23414133{"\n"}
            </Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.break} />
          <Text style={styles.paraHeading}>I-PRO INFINITY INSURANCE BROKING SERVICES LLP</Text>
          <View style={styles.break} />


          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableRowMainHeader}>
                <Text style={styles.tableCellHeader}>CLIENT DETAILS</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Name of the Client</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.clientname}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Address of the Client</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.clientaddress}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableRowMainHeader}>
                <Text style={styles.tableCellHeader}>EXPIRING POLICY DETAILS</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Policy Period</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{policyperiod.policystart} to {policyperiod.policyend}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Insurer Name</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.insurername}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>TPA Name</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.tpaname}</Text>
              </View>
            </View>



            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Number of Employees</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.numberofemp}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Number of Dependants</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.numberofdependency}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Number of Lives Covered</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.totalnumberoflives}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Premium Per Family</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.premiumperfamily}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Premium Per Life</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.premiumperlife}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Premium Excluding GST</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.premiumexcludinggst}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Sum Insured</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.totalsuminsured}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Claims Paid + Outstanding</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.totalclaimspaidoutstanding}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Claim Ratio</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.claimratio}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>365 Days Claims Outgo</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.calimsoutgo365}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>365 Days Claim Ration</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.claimratio365}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>IBNR 365 days</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.ibnr365days}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Family Defination</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.familydefination}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableRowMainHeader}>
                <Text style={styles.tableCellHeader}>RENEWAL POLICY DETAILS</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Number of Employees</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.renewalnumberofemp}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Number of Dependents</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.renewalnumberofdependency}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total numbers of Lives</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.renewaltotalnumberoflives}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Total Sum Insured</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.renewaltotalsuminsured}</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Family Defination</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{data.renewalfamilydefination}</Text>
              </View>
            </View>

          </View>

          <View style={styles.break} />
          <View style={styles.table}>

            <View style={styles.tableRow}>
              <View style={styles.table2ColMainHeader}>
                <View style={styles.tableRowMainHeader}>
                  <Text style={styles.tableCellHeader}>Coverages</Text>
                </View>
              </View>
              <View style={styles.table2Col1MainHeader}>
                <View style={styles.tableRowMainHeader}>
                  <Text style={styles.tableCell}>Policy Terms & Conditions</Text>
                </View>
              </View>
              <View style={styles.table2Col2MainHeader}>
                <View style={styles.tableRowMainHeader}>
                  <Text style={styles.tableCell}>Ex-Policy</Text>
                </View>
              </View>
              <View style={styles.table2Col3MainHeader}>
                <View style={styles.tableRowMainHeader}>
                  <Text style={styles.tableCell}>Renewal Policy</Text>
                </View>
              </View>
            </View>

            {data.ageband && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Age Band</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>{data.ageband}</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>{data.ageband}</Text>
                </View>
              </View>
            )}

            {data.renewalfamilydefination && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Family Defination</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>{data.familydefination}</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>{data.renewalfamilydefination}</Text>
                </View>
              </View>
            )}

            {data.suminsured && data.suminsured.enabled && data.suminsured.suminsured && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Sum Insured</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Family Floater Sum Insured of INR {data.suminsured.suminsured}/-</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Family Floater Sum Insured of INR {data.suminsured.suminsured}/-</Text>
                </View>
              </View>
            )}


            {data.roomrent && data.roomrent.enabled && (data.roomrent.normalroom || data.roomrent.roomicu) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Room Rent for Normal and ICU</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>
                    Normal Room {data.roomrent.normalroom}/- and ICU {data.roomrent.roomicu}/-
                  </Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>
                    Normal Room {data.roomrent.normalroom}/- and ICU {data.roomrent.roomicu}/-
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>1st, 2nd, 3rd & 4th year waiting period</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>
                  Waived.
                </Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>
                  Yes
                </Text>
              </View>
            </View>


            {data.preandposthospitalization && data.preandposthospitalization.enabled && (data.preandposthospitalization.prehospitalization || data.preandposthospitalization.posthospitalization) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Pre and Post Hospitalization</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>
                    {data.preandposthospitalization.prehospitalization}days pre-hospitalization and {data.preandposthospitalization.posthospitalization}days post-hospitalization respectively.
                  </Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>
                    {data.preandposthospitalization.prehospitalization}days pre-hospitalization and {data.preandposthospitalization.posthospitalization}days post-hospitalization respectively.
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Pre-existing diseases</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>
                  Covered from day 1
                </Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>
                  Yes
                </Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>30 days waiting period</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>
                  Waived.
                </Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>
                  Yes
                </Text>
              </View>
            </View>


            {data.maternity && data.maternity.enabled && (data.maternity.maternitynormaldelivery || data.maternity.maternitylscs) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Maternity</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Normal Delivery Rs {data.maternity.maternitynormaldelivery}/- LSCS Rs{data.maternity.maternitylscs}/-</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Normal Delivery Rs {data.maternity.maternitynormaldelivery}/- LSCS Rs{data.maternity.maternitylscs}/-</Text>
                </View>
              </View>
            )}


            {data.preandpostnatal && data.preandpostnatal.enabled && data.preandpostnatal.preandpostnatal && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Pre and Post Natal</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Expenses covered up to{data.preandpostnatal.preandpostnatal}/- within the maternity limit OPD & IPD basis.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Expenses covered up to{data.preandpostnatal.preandpostnatal}/- within the maternity limit OPD & IPD basis.</Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>New Born Baby</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>
                  Covered from the day 1 within the FFSI.
                </Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>
                  Yes
                </Text>
              </View>
            </View>

            {data.toriclence && data.toriclence.enabled && data.toriclence.toriclence && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Toric Lence</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered upto INR {data.toriclence.toriclence}/- per eye.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered upto INR {data.toriclence.toriclence}/- per eye.</Text>
                </View>
              </View>
            )}

            {data.lasiksurgery && data.lasiksurgery.enabled && data.lasiksurgery.lasiksurgery && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Lasik Surgery</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered if the Power of the Eye is +/- {data.lasiksurgery.lasiksurgery}.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered if the Power of the Eye is +/- {data.lasiksurgery.lasiksurgery}.</Text>
                </View>
              </View>
            )}

            {data.corporatebuffer && data.corporatebuffer.enabled && (data.corporatebuffer.corporatebuffer || data.corporatebuffer.restrictedcorporatebuffer) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Corporate Buffer</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Rs {data.corporatebuffer.corporatebuffer}/- Ristercted to SI Rs {data.corporatebuffer.restrictedcorporatebuffer}/-</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Rs {data.corporatebuffer.corporatebuffer}/- Ristercted to SI Rs {data.corporatebuffer.restrictedcorporatebuffer}/-</Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.table}>

            {data.geneticdisorder && data.geneticdisorder.enabled && (data.geneticdisorder.geneticdisorderpercent || data.geneticdisorder.geneticdisorderinr) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Genetic Disorder</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to {data.geneticdisorder.geneticdisorderpercent}% of Sum insured or up to INR {data.geneticdisorder.geneticdisorderinr}/- which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Up to {data.geneticdisorder.geneticdisorderpercent}% of Sum insured or up to INR {data.geneticdisorder.geneticdisorderinr}/- which ever is lower.</Text>
                </View>
              </View>
            )}

            {data.domicillary && data.domicillary.enabled && (data.domicillary.domicillaryhospitalizationpercent || data.domicillary.domicillaryhospitalizationinr) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Domicillary Hospitalization</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered up to {data.domicillary.domicillaryhospitalizationpercent}% of SI, Maximum is Rs {data.domicillary.domicillaryhospitalizationinr}/- depending upon the doctor's approval.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered up to {data.domicillary.domicillaryhospitalizationpercent}% of SI, Maximum is Rs {data.domicillary.domicillaryhospitalizationinr}/- depending upon the doctor's approval.</Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.table}>

            {data.daycaretreatment && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Day Care Treatment</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>{data.daycaretreatment}</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>{data.daycaretreatment}</Text>
                </View>
              </View>
            )}

            {data.ambulancecharges && data.ambulancecharges.enabled && (data.ambulancecharges.ambulancechargespercentage || data.ambulancecharges.ambulancechargesinr) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Ambulance Charges</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Emergency ambulance charges up-to {data.ambulancecharges.ambulancechargespercentage}% of a sum insured or upto Rs {data.ambulancecharges.ambulancechargesinr}/- which ever is less.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Emergency ambulance charges up-to {data.ambulancecharges.ambulancechargespercentage}% of a sum insured or upto Rs {data.ambulancecharges.ambulancechargesinr}/- which ever is less.</Text>
                </View>
              </View>
            )}

            {data.congentalinternaldiseases && data.congentalinternaldiseases.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Congenital Internal Diseases</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered</Text>
                </View>
              </View>
            )}

            {data.congentalexternaldiseases && data.congentalexternaldiseases.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Congenital External Diseases</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered in Life threatening condition only</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered in Life threatening condition only</Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>AYUSH Cover</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Expenses incurred on treatment under Ayurveda covered up to 15% of sum Insured or Rs. 20,000/- which ever is less. Unani  and Homeopathy coverded up to 10% of sum insured or Rs.15,000/- which ever is less.</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>


            {data.widoworwidowercover && data.widoworwidowercover.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Widow Or Widower diseases</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Continuation of dependents coverage in case of death of an employee during the course of the policy.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Continuation of dependents coverage in case of death of an employee during the course of the policy.</Text>
                </View>
              </View>
            )}

            {data.dentaltreatment && data.dentaltreatment.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Dental Treatment</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered if due to accident requiring hospitalization.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered if due to accident requiring hospitalization.</Text>
                </View>
              </View>
            )}

            {data.hivandaids && data.hivandaids.enabled && (data.hivandaids.hivmentaldisorderpersentage || data.hivandaids.hivmentaldisorderinr) && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>HIV / AIDS / Mental Cover</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered up to {data.hivandaids.hivmentaldisorderpersentage}% of Sum insured or INR {data.hivandaids.hivmentaldisorderinr}/- which ever is lower. Corporate buffer cannot be utilized for these claims.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered up to {data.hivandaids.hivmentaldisorderpersentage}% of Sum insured or INR {data.hivandaids.hivmentaldisorderinr}/- which ever is lower. Corporate buffer cannot be utilized for these claims.</Text>
                </View>
              </View>
            )}

            {data.claimsubmissionclause && data.claimsubmissionclause.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Claim Submission clause</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Claim must be filed within 30 days from the date of discharge from the Hospital.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Claim must be filed within 30 days from the date of discharge from the Hospital.</Text>
                </View>
              </View>
            )}

            {data.moderntreatments && data.moderntreatments.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Modern Treatments</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>IRDAI specified Modern Treatments covered.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>IRDAI specified Modern Treatments covered.</Text>
                </View>
              </View>
            )}

            {data.restrictiononcorporatebuffer && data.restrictiononcorporatebuffer.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Restriction On Corporate Buffer</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Restricted to family floater sum insured.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Restricted to family floater sum insured.</Text>
                </View>
              </View>
            )}

            {data.eligiblefamilymemberstousecorporatebuffer && data.eligiblefamilymemberstousecorporatebuffer.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Eligible family members to use Corporate Buffer</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>All family members.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>All family members.</Text>
                </View>
              </View>
            )}

            {data.eventrestriction && data.eventrestriction.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Event Restriction</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Provision to cover 3rd & 4th Child considering if the employee is blessed with twins or triplets in the 1st or 2nd event of delivery.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Provision to cover 3rd & 4th Child considering if the employee is blessed with twins or triplets in the 1st or 2nd event of delivery.</Text>
                </View>
              </View>
            )}

            {data.claimintimation && data.claimintimation.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Claims Intimation</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>No Claims intimation required for reimbursement claims & Day Care procedure claims.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>No Claims intimation required for reimbursement claims & Day Care procedure claims.</Text>
                </View>
              </View>
            )}

            {data.reimbursementclaimsreporting && data.reimbursementclaimsreporting.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Re-imbursement Claims Reporting / Submitting Period</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Claim reporting /submission period within 30 days from the Date of Discharge.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Claim reporting /submission period within 30 days from the Date of Discharge.</Text>
                </View>
              </View>
            )}


            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>GIPSA/PPN Rates</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Not applicable</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Limit on any one Disease / Ailment / Cataeact including multi focal lenses</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Not applicable</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Limit on surgenon charges, Anesthetic charges, Stent charges, etc.</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>No capping</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>


            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Hospitalization / Injury arising out Terrorism</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Covered for all</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Premium Calculation</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Pro rata Basis</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>


            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Continuity benefit</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>a) Employees and family members who are presently covered under GMC Policy of EMPLOYER will be allowed to buy Individual Health Policy from existing insurance company as per prevailing market rates, without any health check up.
                  b) Excluding Maternity Benefit & No Claim Discount
                  c) Confirmation on Coverage of the employee and dependents to be confirmed by the insured & TPA ( Based on the no of years of service in the organization without any break in the coverage)
                  d) Waiver of clauses to be applied from the Date of Joining of the Employee in the Insured Company (Eg:If the employee has completed 4 years of service in the Insured Company he will be allowed to carry forward the waiver of PED / 30 days / 1st 2nd & 4th Year Exclusion)
                  e) Intimation will be provided by the employee 15 Days in advance from the last Date of leaving the organization
                  f) Sum Insured for the Individual Policy shall be equal to the sum insured in the Corporate policy or lesser. They cannot opt for a higher sum insured
                  g) Health check up for parents to be done at the employees cost. In case the employee has completed only 2 years of service with Insured, then the parents will have to undergo medicals. In case the employee has completed 4 Years, then there is no need for medical check up</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>



            {data.tpa && data.tpa.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Third Party Administrator (TPA)</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>AS PER THE INSURER CHOICE.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>AS PER THE INSURER CHOICE.</Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Organ Donor and Donor evaluation expenses</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Expenses incurred towards the evaluation of donor, the transportation of the donated organ (any mode) including the hospitalization expenses with xxx days per hospitalization and 60 days post hospitalization would be payable.</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>

            {data.animalseroentattack && data.animalseroentattack.enabled && data.animalseroentattack.animalseroentattack && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Animal Serpent attack</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Resulting in treatment on in-patient or out-patient basis, sub limited to a maximum of INR {data.animalseroentattack.animalseroentattack}/- on each and every claim.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Resulting in treatment on in-patient or out-patient basis, sub limited to a maximum of INR {data.animalseroentattack.animalseroentattack}/- on each and every claim.</Text>
                </View>
              </View>
            )}

            {data.treatmentforsleepapnea && data.treatmentforsleepapnea.enabled && data.treatmentforsleepapnea.treatmentforsleepapnea && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Treatment for sleep apnea</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Type of sleep disorder characterized by pauses in breathing of instances of shallow. Recommended to be covered as part od policy on IPD basis including the cost of the machine up to INR {data.treatmentforsleepapnea.treatmentforsleepapnea}/-.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Type of sleep disorder characterized by pauses in breathing of instances of shallow. Recommended to be covered as part od policy on IPD basis including the cost of the machine up to INR {data.treatmentforsleepapnea.treatmentforsleepapnea}/-.</Text>
                </View>
              </View>
            )}

            {data.avastinlucentsinjection && data.avastinlucentsinjection.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Avastin / Lucents Injection</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
              </View>
            )}

            {data.cyberknifetreatmentandroboticsurgery && data.cyberknifetreatmentandroboticsurgery.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Cyber Knife treatment and Robotic Surgery</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
              </View>
            )}

            {data.wellmothercareexpenses && data.wellmothercareexpenses.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Well Mother Care expenses</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Cover the room rent for mother who is required to feed the baby post birth if the new born baby is hospitalized and up to age of 5 years within the Family Floater Sum Insured.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Cover the room rent for mother who is required to feed the baby post birth if the new born baby is hospitalized and up to age of 5 years within the Family Floater Sum Insured.</Text>
                </View>
              </View>
            )}

            {data.healthybabyexpenses && data.healthybabyexpenses.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Healthy Baby expenses</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Cover the Expenses Incurred for a Normal baby after the birth till discharge within the Maternity limit. To ensure the necessary expenses related to wellbeing after birth and before discharge. (Expenses like doctors check up and any other check up / tests performed to ensure that the baby is well at birth).</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Cover the Expenses Incurred for a Normal baby after the birth till discharge within the Maternity limit. To ensure the necessary expenses related to wellbeing after birth and before discharge. (Expenses like doctors check up and any other check up / tests performed to ensure that the baby is well at birth).</Text>
                </View>
              </View>
            )}

            {data.infertilitycover && data.infertilitycover.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Infertility cover</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered on OPD / IPD Diagnosis and treatment within maternity limit.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered on OPD / IPD Diagnosis and treatment within maternity limit.</Text>
                </View>
              </View>
            )}

            {data.incomprotectiorcover && data.incomprotectiorcover.enabled && data.incomprotectiorcover.incomprotectiorcover && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Income protector cover - Loss of wages due to illness</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered subject to “Actual Loss Of Pay or Rs {data.incomprotectiorcover.incomprotectiorcover}/- whichever is lower for 6 months.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered subject to “Actual Loss Of Pay or Rs {data.incomprotectiorcover.incomprotectiorcover}/- whichever is lower for 6 months.</Text>
                </View>
              </View>
            )}

            {data.surrogacyreproduction && data.surrogacyreproduction.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Surrogacy / Assisted Reproduction.</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>a. Maternity expenses for the surrogate mother ONLY will be covered.
                    b. Same conditions as Maternity will apply subject to proper documentation.
                    c. Infertility needs to be documented for Surrogacy to be admissible.
                    d. Cost of surrogates boarding, remuneration, follow up expenses will not be payable.
                    e. Only the Delivery of the child, pre & post natal expenses will be paid</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
              </View>
            )}

            {data.prostheticappendages && data.prostheticappendages.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Prosthetic Appendages</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Cost of the Prosthetic limb will be covered within the FFSI, corporate buffer not applicable.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Cost of the Prosthetic limb will be covered within the FFSI, corporate buffer not applicable.</Text>
                </View>
              </View>
            )}


            {data.extendedcancercare && data.extendedcancercare.enabled && data.extendedcancercare.extendedcancercare && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Extended Cancer care</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Complete Blood Count (CBC)/ PET scans / ONCO Scans and other follow up tests including patients in remission sublimated to Rs {data.extendedcancercare.extendedcancercare}/- per incident.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Complete Blood Count (CBC)/ PET scans / ONCO Scans and other follow up tests including patients in remission sublimated to Rs {data.extendedcancercare.extendedcancercare}/- per incident.</Text>
                </View>
              </View>
            )}

            {data.homecaretreatmentdeclaredepidemic && data.homecaretreatmentdeclaredepidemic.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Home care treatment in case of declared Epidemic or Quarantine</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered for all.</Text>
                </View>
              </View>
            )}

            {data.automaticcoveragefor4and3child && data.automaticcoveragefor4and3child.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Automatic coverage for 4th and 3rd child.</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Provision to cover 3rd & 4th Child considering if the employee is blessed with twins or triplets in the 1st or 2nd event of delivery</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Special Conditions.</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Treatment of mental illness, stress, psychological disorder and neurodegenerative disorders.</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to 25% of Sum insured or up to 2L which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Balloon sinuplasty, bronchial thermoplasty, vaporization of prostrate (green Laser treatment), Intra operative neuro monitoring, intra vitreal injections </Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to 25% of Sum insured or up to 2L which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Stemcell therapy-Hematopoietic stemcells for bone marrow transplant for haematological conditions to be covered</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to 25% of Sum insured or up to 2L which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Robotic Surgery, radiosurgery, treatment like Cyber Knife, gamma Knife, etc. for disease, illness, mental conditions or injury that is otherwise not excluded under this policy.
                    Cochlear implants/geneticdisorder</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to 25% of Sum insured or up to 2L which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.specialconditions && data.specialconditions.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Oral Chemotherapy and Immunotherapy (Monoclonal antibody to be given as an injection)</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Up to 25% of Sum insured or up to 2L which ever is lower.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}></Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}></Text>
                </View>
              </View>
            )}

            {data.oralchemotheraphy && data.oralchemotheraphy.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Oral Chemotheraphy</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>To cover as part of your policy both in IPD & OPD basis as the cost of this medication is more and is advised to patients during the early stages of Cancer</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
              </View>
            )}

            {data.oralmedication && data.oralmedication.enabled && data.oralmedication.oralmedication && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Oral Medication / Drugs</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>Covered up to Rs {data.oralmedication.oralmedication}/- per family on OPD basis, subject to the below conditions.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Covered up to Rs {data.oralmedication.oralmedication}/- per family on OPD basis, subject to the below conditions.</Text>
                </View>
              </View>
            )}

            {data.corporatebuffereventrestriction && data.corporatebuffereventrestriction.enabled && (
              <View style={styles.tableRow}>
                <View style={styles.table2ColHeader}>
                  <Text style={styles.tableCellHeader}>Corporate Buffer Event Restriction.</Text>
                </View>
                <View style={styles.table2Col1}>
                  <Text style={styles.tableCell}>In case of complications arising out of maternity will be covered and in case of any complication for New Born Baby will be covered with the Family Floater Sum Insured.</Text>
                </View>
                <View style={styles.table2Col2}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
                <View style={styles.table2Col3}>
                  <Text style={styles.tableCell}>Yes</Text>
                </View>
              </View>
            )}

            <View style={styles.tableRow}>
              <View style={styles.table2ColHeader}>
                <Text style={styles.tableCellHeader}>Co-pay</Text>
              </View>
              <View style={styles.table2Col1}>
                <Text style={styles.tableCell}>Cyberknife treatment/Stem Cell Transplantation Covered with 50% Co Pay</Text>
              </View>
              <View style={styles.table2Col2}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
              <View style={styles.table2Col3}>
                <Text style={styles.tableCell}>Yes</Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
