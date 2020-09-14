'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.intitule) {
        data.slug = slugify(data.intitule, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.intitule) {
        data.slug = slugify(data.intitule, {lower: true});
      }
    },
  },
};
