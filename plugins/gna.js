const internals = {};

internals.GnaPlugin = module.exports = {};


internals.GnaPlugin.register = (server, options, next) => {


  server.route({
    path: '/',
    method: 'GET',
    handler : function (request, reply) {
      reply('ok')
    }
  });

  next();
};

internals.GnaPlugin.register.attributes = {
  name: 'gna'
};