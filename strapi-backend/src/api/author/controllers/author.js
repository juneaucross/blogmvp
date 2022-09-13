'use strict';

/**
 * author controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

// !!! function to add to or override default controller methods !!!PAY ATTENTION!!!
module.exports = createCoreController("api::author.author", ({
  strapi
}) => ({
  async findOne(ctx) {
    const {
      slug
    } = ctx.params;

    const query = {
      filters: {
        slug
      },
      ...ctx.query,
    };

    const author = await strapi.entityService.findMany("api::author.author", query);

    const sanitizedEntity = await this.sanitizeOutput(author);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
