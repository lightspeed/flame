module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/template/', '/dist/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/file-mock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '<rootDir>/jest.setup.js',
    '<rootDir>/packages/flame/src/Flag',
    '<rootDir>/packages/flame/src/Icon',
  ],
  transformIgnorePatterns: ['node_modules/(?!@lightspeed)'],
  moduleDirectories: ['node_modules', '<rootDir>/tests'],
};
