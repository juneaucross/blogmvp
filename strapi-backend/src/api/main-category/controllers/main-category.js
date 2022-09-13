'use strict';

/**
 * main-category controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

// !!! function to add to or override default controller methods !!!PAY ATTENTION!!!
module.exports = createCoreController("api::main-category.main-category", ({
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

    const mainCategory = await strapi.entityService.findMany("api::main-category.main-category", query);

    const sanitizedEntity = await this.sanitizeOutput(mainCategory);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
