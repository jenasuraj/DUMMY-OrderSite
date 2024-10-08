import React, { useState } from 'react';


const SendData = ({ orders }) => {
    const [display, setDisplay] = useState([]);
    const [textHere,setTextHere] =useState('');

    const GetOne = async () => {
        try {
            const response = await fetch('http://localhost:5000/show');
            const data = await response.json();
            setDisplay(data.inputData);
            setTextHere(data.text);
        } catch (error) {
            alert("Error fetching data");
        }
    };
    console.log(textHere);

    const SendRequest = async () => {
        console.log("Sending Orders:", orders); // Log Orders before sending

        try {
            const response = await fetch('http://localhost:5000/show', {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orders }), // Ensure Orders is in the correct format
            });
  
            if (response.ok) {
                GetOne(); // Fetch data after successful post
            } else {
                const errorData = await response.json();
                alert(`Error sending data: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.log("Error posting data:", error);
            alert("Error posting data. Check console for details.");
        }
    };

    return (
        <>
        <div className='last'>
 
        
            <button className='req-btn' onClick={SendRequest}>Send Request</button>
            <p>The items that you ordered are:</p>
            <div className="outputlast">
                {display.map((i, index) => (
                    <div key={index}>{i}{"---"}</div>
                ))}
            </div>
            <h4>{textHere}</h4>
            </div>
        </>
    );
};

export default SendData;
