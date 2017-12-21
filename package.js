Package.describe({
  name: 'heipacker:networkinfo',
  summary: 'Moac network information package',
  version: '0.1.0',
  git: 'https://github.com/heipacker/meteor-moac-networkinfo.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('jrudio:bluebird@3.3.1_1', ['client', 'server']);
  api.export(['NetworkInfo'], ['client', 'server']);
  api.addFiles('networkInfo.js', ['client', 'server']);
});
