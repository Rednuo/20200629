const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const config={
  entry:{
    app:'./src/app.js',
    vendors:'./src/vendors.js'
  },
  output:{
    path:__dirname+'/dist',
    filename:'[name].js'
  },
  module:{
    rules:[
      {test:/\.txt$/,use:'raw-loader'},
      {test:/\.css$/,use:'css-loader'},
      {test:/\.ts$/,use:'ts-loader'},
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./src/index.html'})
  ]
};

