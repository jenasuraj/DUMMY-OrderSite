const nodemailer = require("nodemailer");

let inputData = [];

// Email transporter configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:true,
  port:465,
  auth: {
  
    user: 'jenasuraj742@gmail.com',   // Your Gmail account using which we can send emails
    pass: 'fdqj iojb thhv fivj' // Replace this with your generated app password
  }
});

// Function to send email
async function sendEmail(inputData) {
  const itemsList = inputData.join(', '); // Convert array to a comma-separated string

  try {
    const info = await transporter.sendMail({
      from: '"The suraj jena company 👻" <jenasuraj742@gmail.com>', // sender address
      to: "jenasuraj574@yahoo.com", // recipient address (you can change this if needed)
      subject: "Your Ordered Items", // Subject line
      text: `You have ordered the following items: ${itemsList}`, // plain text body
      html: `<p>You have ordered the following items:</p><ul>${inputData.map(item => `<li>${item}</li>`).join('')}</ul>`, // HTML formatted body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error.message);
  }
}

// Controller function to handle GET requests
const GetData = (req, res) => {
  let text = "The details are redirected to jenasuraj574@yahoo.com";
  console.log(inputData);
  res.json({ inputData ,text });
  
};

// Controller function to handle POST requests and send email
const PostData = (req, res) => {
  console.log('Received Body:', req.body);
  console.log('Received Orders:', req.body.orders);

  if (req.body.orders) {
    inputData = req.body.orders; // Store the orders in inputData

    // Send email with inputData array
    sendEmail(inputData);

    res.json({ inputData });
  } else {
    res.status(400).json({ message: "Orders are missing" });
  }
};

module.exports = {
  GetData,
  PostData
};
