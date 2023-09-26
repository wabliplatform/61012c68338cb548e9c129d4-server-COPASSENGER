/**
 * The UprofileController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UprofileService');
const createuprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.createuprofile);
};

const deleteuprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteuprofile);
};

const getAlluprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlluprofile);
};

const getByParamsuprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsuprofile);
};

const getuprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getuprofile);
};

const updateuprofile = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateuprofile);
};


module.exports = {
  createuprofile,
  deleteuprofile,
  getAlluprofile,
  getByParamsuprofile,
  getuprofile,
  updateuprofile,
};
