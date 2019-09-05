const manifesto = require('../../application/config/information/manifesto');
const traceHeaders = require('../../application/health/tracing-header');
const httpStatus = require('http-status-codes');

const apiInformation = {

  getManifesto : async (req, reply, next) => {

    reply
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", traceHeaders.join(","))
      .header("Access-Control-Allow-Methods", "GET, OPTIONS")
      .code(httpStatus.OK)
      .send({
        status: httpStatus.OK,
        data: manifesto.information,
        log: `Successfully sent API information. - ${httpStatus.getStatusText(httpStatus.OK)}`
      });

    //next();
  }

};

module.exports = apiInformation;