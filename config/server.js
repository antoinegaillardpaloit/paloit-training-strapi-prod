module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', ''),
  url: env('URL', ''),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2037df301550f917904484fcaddf2d65'),
    },
  },
});