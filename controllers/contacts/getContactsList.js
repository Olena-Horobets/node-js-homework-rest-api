const { Contact } = require("../../models");

const getContactsList = async (req, res) => {
	const contacts = await Contact.find({});
	res.status(200).json({ status: "success", code: 200, data: contacts });
};

module.exports = getContactsList;
