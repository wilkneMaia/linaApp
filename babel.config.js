module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@core': './src/core',
        '@shared': './src/shared',
        '@infra': './src/infra'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
