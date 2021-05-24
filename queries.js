const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertopportunity_tag = (request, response) => {
const {opportunity_id, tag_id} = request.body
  pool.query( "INSERT INTO cbanc2.opportunity_tag (opportunity_id, tag_id) VALUES ($1,$2)",[opportunity_id, tag_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in opportunity_tag')
  })
}



module.exports = {
insertopportunity_tag
}
