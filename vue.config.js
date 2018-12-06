// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    assetsDir: 'static',
    /*configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin()
        ]
    },
    chainWebpack: config => {
        // MiniCssExtractPlugin Loader
        config.module
            .rule('sass')
            .test(/\.sass$/)
            .use(MiniCssExtractPlugin.loader)
                .loader(MiniCssExtractPlugin.loader)
            .end()
    }*/
}