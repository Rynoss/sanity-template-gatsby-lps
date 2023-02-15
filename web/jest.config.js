module.exports = {
  preset: 'ts-jest', //enables typescript import in jest
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  //testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: 'jsdom',
  //'\\.css$': require.resolve('./__mocks__/style-mock.js') //mocks css files to empty object since we arent testing css with jest
};
