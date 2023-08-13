const model = require("../Models/model");
const projects = require("../projectdetail");
const projectget = (req, res) => {
  res.send(projects);
};
const sendData = async (req, res) => {
  const { fullName, phone, email, message } = req.body;
  if (!fullName || !phone || !email || !message) {
    res.send("please provide mandatory fields");
  }

  const data = await model.create({ fullName, phone, email, message });
  res.send(data);
};
module.exports = { projectget, sendData };
