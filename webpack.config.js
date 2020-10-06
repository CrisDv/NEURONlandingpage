module.exports={
    entry: './src/client/index.js',//archivo de entrada
    output: {//archivo de salida para el navegador
        path:__dirname+'/src/public',
        filename:'bundle.js' //archivo de codigo convertido
    },
    module:{//reglas para babel
        rules:[
            {
                use:['babel-loader'],
                test: /\.(js|jsx)$/,
                exclude: /node_modeules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    target:'node-webkit',
    externals:{
        fs:    "commonjs fs"
    }

}; 