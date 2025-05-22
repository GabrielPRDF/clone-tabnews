import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  response.status(200).json({ chave: "Estamos progredindo \u{1F600}" });
}

export default status;
