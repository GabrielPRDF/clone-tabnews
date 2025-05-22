import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const versionDB = await database.query("SHOW server_version");
  const maxConnection = await database.query("SHOW max_connections");
  const activityConnections = await database.query(
    "SELECT COUNT(state) FROM pg_stat_activity WHERE state = 'active'",
  );
  console.log(versionDB);
  response.status(200).json({
    updated_at: updatedAt,
    version_db: versionDB.rows[0].server_version,
    max_connection: maxConnection.rows[0].max_connections,
    activity_connection: activityConnections.rows[0].count,
  });
}

export default status;
