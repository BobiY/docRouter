var webpack = require("webpack");
var path = require("path");
module.exports = {
  plugins:[new webpack.HotModuleReplacementPlugin()],
  entry:__dirname + "/App/app.js",
  output:{
    path:path.resolve(__dirname,"public"),
    filename:"bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader:"babel-loader",
          options:{
            presets:["es2015","react"]
          }
        }]
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  devServer:{
    contentBase:__dirname + "/public",
    hot:true,
    stats:{
      colors:true
    },
    port:3000,
    inline:true
  }
};
