const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const port = 3001;
const multer = require('multer');
const nodemailer = require('nodemailer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const crypto = require('crypto');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a schema and model for the form data


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SGlory@2024',
  database: 'clientdata'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'deepthim9745@gmail.com',
    pass: 'sxqm ansl bcro mbdw'
  }
});


app.get('/profile-image/:userName', (req, res) => {
  const userName = req.params.userName;
  const query = 'SELECT image FROM login WHERE name = ?';

  db.query(query, [userName], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Error inside server.' });
    }
    if (results.length > 0) {
      const image = results[0].image;
      if (image) {
        res.json({ image: image.toString('base64') });
      } else {
        res.status(404).json({ message: 'Profile image not found.' });
      }
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  });
});

app.post('/upload-profile-image', upload.single('profileImage'), (req, res) => {
  const userName = req.body.userName;
  const image = req.file;

  if (!image) {
    return res.status(400).json({ message: 'No file received.' });
  }

  const query = 'UPDATE login SET image = ? WHERE name = ?';
  db.query(query, [image.buffer, userName], (err, results) => {
    if (err) {
      console.error('Failed to save image:', err);
      return res.status(500).json({ message: 'Failed to save profile image.' });
    }
    res.status(200).json({ message: 'Profile image saved successfully.' });
  });
});


app.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const query = 'SELECT * FROM login WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing query: " + err);
      return res.status(500).json({ success: false, message: "Server error" });
    }
    if (results.length > 0) {
      const user = results[0];
      res.json({
        success: true,
        name: user.name || 'User', // Default to 'User' if name is null
        email: user.email
      });
    } else {
      res.status(401).json({ success: false, message: "Incorrect email or password" });
    }
  });
});

function generateResetToken() {
  return crypto.randomBytes(20).toString('hex');
}

function sendResetEmail(email, token) {
  const mailOptions = {
    from: 'deepthim9745@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `You requested a password reset. Please use the following link to reset your password:
      http://localhost:3000/reset-password?token=${token}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error.message);
      return false; // Return false if the email fails to send
    } else {
      console.log('Email sent:', info.response);
      return true; // Return true if the email is sent successfully
    }
  });
}

app.post('/reset-password', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const resetToken = generateResetToken();
  const query = 'UPDATE login SET resetToken = ?, updated_at = NOW() WHERE email = ?';

  db.query(query, [resetToken, email], (err, results) => {
    if (err) {
      console.error("Error executing query: " + err);
      return res.status(500).json({ success: false, message: "Server error" });
    }
    if (results.affectedRows > 0) {
      sendResetEmail(email, resetToken);
      res.json({ success: true, message: "Reset password email sent" });
    } else {
      res.status(404).json({ success: false, message: "Email not found" });
    }
  });
});

app.post('/update-password', (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ success: false, message: "Token and new password are required" });
  }

  const query = 'UPDATE login SET password = ?, resetToken = NULL WHERE resetToken = ?';

  db.query(query, [newPassword, token], (err, results) => {
    if (err) {
      console.error("Error updating password: " + err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    if (results.affectedRows > 0) {
      res.json({ success: true, message: "Password reset successfully" });
    } else {
      res.status(404).json({ success: false, message: "Invalid or expired token" });
    }
  });
});



// Example route to get data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM empcredentials', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post('/api/insert-gmc', (req, res) => {
  const { clientname, clientaddress, policyperiod, insurername, tpaname, numberofemp, numberofdependency, totalnumberoflives, premiumperfamily, premiumperlife, premiumexcludinggst, exsuminsured, totalsuminsured, totalclaimspaidoutstanding, claimratio, calimsoutgo365, claimratio365, ibnr365days, familydefination, renewalnumberofemp, renewalnumberofdependency, renewaltotalnumberoflives, renewalsuminsured, renewaltotalsuminsured, renewalfamilydefination, ageband, suminsured, roomrent, preandposthospitalization, maternity, preandpostnatal, toriclence, lasiksurgery, corporatebuffer, geneticdisorder, domicillary, daycaretreatment, ambulancecharges, congentalinternaldiseases, congentalexternaldiseases, widoworwidowercover, dentaltreatment, hivandaids, claimsubmissionclause, moderntreatments, restrictiononcorporatebuffer, eligiblefamilymemberstousecorporatebuffer, eventrestriction, claimintimation, reimbursementclaimsreporting, tpa, animalseroentattack, treatmentforsleepapnea, avastinlucentsinjection, cyberknifetreatmentandroboticsurgery, wellmothercareexpenses, healthybabyexpenses, infertilitycover, incomprotectiorcover, surrogacyreproduction, prostheticappendages, extendedcancercare, homecaretreatmentdeclaredepidemic, automaticcoveragefor4and3child, specialconditions, oralchemotheraphy, oralmedication, corporatebuffereventrestriction } = req.body;

  const sql = `INSERT INTO gmc (clientname, clientaddress, insurername, tpaname, policystart, policyend, numberofemp, numberofdependency, totalnumberoflives, premiumperfamily, premiumperlife, premiumexcludinggst, exsuminsured, totalsuminsured, totalclaimspaidoutstanding, claimratio, calimsoutgo365, claimratio365, ibnr365days, familydefination, renewalnumberofemp, renewalnumberofdependency, renewaltotalnumberoflives, renewalsuminsured, renewaltotalsuminsured, renewalfamilydefination, ageband, suminsured, normalroom, roomicu, prehospitalization, posthospitalization, maternitynormaldelivery, maternitylscs, preandpostnatal, toriclence, lasiksurgery, corporatebuffer, restrictedcorporatebuffer, geneticdisorderpercent, geneticdisorderinr, domicillaryhospitalizationpercent, domicillaryhospitalizationinr, daycaretreatment, ambulancechargespercentage, ambulancechargesinr, congentalinternaldiseases, congentalexternaldiseases, widoworwidowercover, dentaltreatment, hivmentaldisorderpersentage, hivmentaldisorderinr, claimsubmissionclause, moderntreatments, restrictiononcorporatebuffer, eligiblefamilymemberstousecorporatebuffer, eventrestriction, claimintimation, reimbursementclaimsreporting, tpa, animalseroentattack, treatmentforsleepapnea, avastinlucentsinjection, cyberknifetreatmentandroboticsurgery, wellmothercareexpenses, healthybabyexpenses, infertilitycover, incomprotectiorcover, surrogacyreproduction, prostheticappendages, extendedcancercare, homecaretreatmentdeclaredepidemic, automaticcoveragefor4and3child, specialconditions, oralchemotheraphy, oralmedication, corporatebuffereventrestriction) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    clientname || null,
    clientaddress || null,
    insurername || null,
    tpaname || null,
    policyperiod.policystart || null,
    policyperiod.policyend || null,
    numberofemp || null,
    numberofdependency || null,
    totalnumberoflives || null,
    premiumperfamily || null,
    premiumperlife || null,
    premiumexcludinggst || null,
    exsuminsured || null,
    totalsuminsured || null,
    totalclaimspaidoutstanding || null,
    claimratio || null,
    calimsoutgo365 || null,
    claimratio365 || null,
    ibnr365days || null,
    familydefination || null,
    renewalnumberofemp || null,
    renewalnumberofdependency || null,
    renewaltotalnumberoflives || null,
    renewalsuminsured || null,
    renewaltotalsuminsured || null,
    renewalfamilydefination || null,
    ageband || null,
    suminsured.suminsured || null,
    roomrent.normalroom || null,
    roomrent.roomicu || null,
    preandposthospitalization.prehospitalization || null,
    preandposthospitalization.posthospitalization || null,
    maternity.maternitynormaldelivery || null,
    maternity.maternitylscs || null,
    preandpostnatal.preandpostnatal || null,
    toriclence.toriclence || null,
    lasiksurgery.lasiksurgery || null,
    corporatebuffer.corporatebuffer || null,
    corporatebuffer.restrictedcorporatebuffer || null,
    geneticdisorder.geneticdisorderpercent || null,
    geneticdisorder.geneticdisorderinr || null,
    domicillary.domicillaryhospitalizationpercent || null,
    domicillary.domicillaryhospitalizationinr || null,
    daycaretreatment || null,
    ambulancecharges.ambulancechargespercentage || null,
    ambulancecharges.ambulancechargesinr || null,
    congentalinternaldiseases.enabled,
    congentalexternaldiseases.enabled,
    widoworwidowercover.enabled,
    dentaltreatment.enabled,
    hivandaids.hivmentaldisorderpersentage || null,
    hivandaids.hivmentaldisorderinr || null,
    claimsubmissionclause.enabled,
    moderntreatments.enabled,
    restrictiononcorporatebuffer.enabled,
    eligiblefamilymemberstousecorporatebuffer.enabled,
    eventrestriction.enabled,
    claimintimation.enabled,
    reimbursementclaimsreporting.enabled,
    tpa.enabled,
    animalseroentattack.animalseroentattack || null,
    treatmentforsleepapnea.treatmentforsleepapnea || null,
    avastinlucentsinjection.enabled,
    cyberknifetreatmentandroboticsurgery.enabled,
    wellmothercareexpenses.enabled,
    healthybabyexpenses.enabled,
    infertilitycover.enabled,
    incomprotectiorcover.incomprotectiorcover || null,
    surrogacyreproduction.enabled,
    prostheticappendages.enabled,
    extendedcancercare.extendedcancercare || null,
    homecaretreatmentdeclaredepidemic.enabled,
    automaticcoveragefor4and3child.enabled,
    specialconditions.enabled,
    oralchemotheraphy.enabled,
    oralmedication.oralmedication || null,
    corporatebuffereventrestriction.enabled,

  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Failed to insert data.');
    }
    res.status(200).send('Data inserted successfully!');
  });
});

app.post('/logout', (req, res) => {
  const { userName } = req.body;

  if (!userName) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  const query = 'UPDATE login SET image = NULL WHERE name = ?';
  db.query(query, [userName], (err, result) => {
    if (err) {
      console.error('Error clearing profile image:', err);
      return res.status(500).json({ message: 'Error clearing profile image.' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'Logged out successfully.' });
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});