'use strict';

/**
 * course-taking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-taking.course-taking');
