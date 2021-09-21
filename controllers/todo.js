exports.addTodo = (req, res) => {
  console.log(req.body);
  res.send({ text: 'success', body: req.body });
};
