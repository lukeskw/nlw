//const orphanages = require('./database/fakedata')
const Database = require("./database/db.js");
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    //   return res.render('orphanage')
    const id = req.query.id;
    try {
      const db = await Database;
      const results = await db.all(`
            SELECT * FROM orphanages WHERE id="${id}"
            `);
      const orphanage = results[0];
      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0];

      if (orphanage.open_weekends == "0") {
        orphanage.open_weekends = false;
      } else {
        orphanage.open_weekends = true;
      }
      //   console.log(orphanage)
      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Erro no database");
    }
  },

  async orphanages(req, res) {
    //return res.render('orphanages', { orphanages })
    //colocar o orphanage pelo banco
    try {
      const db = await Database;
      const orphanages = await db.all(`
            SELECT * FROM orphanages
            `);
      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Erro no database");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;
    //validação de campos preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }
    //salvar um orfanato
    try {
      const db = await Database;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_weekends: fields.open_weekends,
      });
      console.log("console de fields", fields);
      //redirecionamento
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Erro no database");
    }
  },
};
