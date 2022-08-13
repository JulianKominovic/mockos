const StatusCode = require("../../models/enums/StatusCode");

module.exports = {
  get: async (req, res) => {
    return res.send(
      [200, 201, 204, 400, 403, 404, 500].map((status) => {
        return { ...StatusCode[status], code: status };
      })
    );
  },
};
