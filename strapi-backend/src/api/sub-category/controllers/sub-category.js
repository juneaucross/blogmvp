'use strict';

/**
 * sub-category controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

// !!! function to add to or override default controller methods !!!PAY ATTENTION!!!
module.exports = createCoreController("api::sub-category.sub-category", ({
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

    const subCategory = await strapi.entityService.findMany("api::sub-category.sub-category", query);

    const sanitizedEntity = await this.sanitizeOutput(subCategory);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
