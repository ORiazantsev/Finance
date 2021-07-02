module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              mimetype: "application/font-truetype",
              name: "/fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
