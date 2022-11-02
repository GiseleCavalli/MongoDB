
const Client = require("../schema/clientSchema");

const ClientService = {
  async listAll(_, res) {
    try {
      const clients = await Client.find();
      res.status(200).json(clients);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: error });
    }
  },

  async create(req, res) {
    const client = new Client({
      name: req.body.fullName,
      address: req.body.address,
      nationality: req.body.nationality,
      email: req.body.email,
      phone: req.body.phone,
    });

    client.save((error, _) => {
      if (error) {
        return res.status(204).send({
          message: error,
        });
      }

      return res.status(200).send({
        message: "Client created successfully.",
      });
    });
  },

  async getById(req, res) {
    const id = req.params.id;

    try {
      const client = await Client.findOne({ _id: id });
      if (!client) {
        res.status(204).json({ message: "Client not found." });
        return;
      }
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  async update(req, res) {
    const id = req.params.id;

    const customer = {
        name: req.body.fullName,
        address: req.body.address,
        nationality: req.body.nationality,
        email: req.body.email,
        phone: req.body.phone,
    };

    try {
      const updatedClient = await Client.updateOne({ _id: id }, customer);
      if (updatedClient.matchedCount === 0) {
        res.status(204).json({ message: "Client not found." });
        return;
      }
      res.status(200).json(client);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },

  async delete(req, res) {
    const id = req.params.id;

    try {
      const client = await Client.findOne({ _id: id });
      if (!client) {
        res.status(204).json({ message: "Client not found." });
        return;
      }
      await Client.deleteOne({ _id: id });
      res.status(200).json({ message: "Client deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports.ClientService = ClientService;