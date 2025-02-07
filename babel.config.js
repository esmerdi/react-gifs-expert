//ESM
/*export default {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};*/

//CommonJS
module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ]
};