const getUserController = (req, res) => {
  console.log(req.body);
  res.status(200).send("Get User data");
};
module.exports = { getUserController };
