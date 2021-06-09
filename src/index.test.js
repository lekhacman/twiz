it('should bootstrap', function () {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  require('./index');
});
