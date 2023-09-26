/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Uprofile } = require('../models/Uprofile');

/**
* Creates the data
*
* uprofile Uprofile data to be created
* returns uprofile
* */
const createuprofile = ({ uprofile }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Uprofile(uprofile).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* uprofileId String the Id parameter
* no response value expected for this operation
* */
const deleteuprofile = ({ uprofileId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Uprofile.findOneAndDelete({ _id:uprofileId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlluprofile = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Uprofile.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsuprofile = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Uprofile.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* uprofileId String the Id parameter
* returns uprofile
* */
const getuprofile = ({ uprofileId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Uprofile.findById(uprofileId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* uprofileId String the Id parameter
* uprofile Uprofile data to be updated (optional)
* returns uprofile
* */
const updateuprofile = ({ uprofileId, uprofile }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Uprofile.findOneAndUpdate({ _id:uprofileId },uprofile).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createuprofile,
  deleteuprofile,
  getAlluprofile,
  getByParamsuprofile,
  getuprofile,
  updateuprofile,
};
