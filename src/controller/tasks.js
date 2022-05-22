module.exports = function (_req, res) {
  const dadosFake = [
    {
      id: 1,
      description: 'estudar javascript',
      status: false,
    },
    { id: 2, description: 'estudar php (mentira)', status: false },
    { id: 3, description: 'cansei de estudar', status: false },
  ];
  res.send({ dados: dadosFake });
};
