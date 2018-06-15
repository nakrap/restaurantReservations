// This is to hold all of the waiting list data.
// It could be empty as well.

var waitingArray = [
	{
    customerName: "marissa",
    phoneNumber: "312-345-6323",
    customerEmail: "marissa@gmail.com",
    customerID: "marissaM"
    },
    {
    customerName: "nick",
    phoneNumber: "312-123-9876",
    customerEmail: "nick@gmail.com",
    customerID: "nickA"
    }, 
    {
    customerName: "treek",
    phoneNumber: "312-432-7654",
    customerEmail: "treek@gmail.com",
    customerID: "treekD"
    }
];

// Makes it accessible to other files using require. 
module.exports = waitingArray;