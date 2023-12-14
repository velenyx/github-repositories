module.exports = {
  '**/*.(ts|tsx)': () => ['yarn lint:ts:check', 'yarn prettier:check'],
};
