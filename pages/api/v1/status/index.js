import database from "infra/database";
import bg from "../../assets/images/security-team.jpg";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const versionDB = await database.query("SHOW server_version");
  const maxConnection = await database.query("SHOW max_connections");
  const activityConnections = await database.query(
    "SELECT COUNT(state) FROM pg_stat_activity WHERE state = 'active'",
  );
  // const databaseOpenedConnectionsResult = await database.query(
  //   "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db'",
  // );

  // console.log(databaseOpenedConnectionsResult.rows[0].count);
  // const activityConnections = await database.query(
  //   "SELECT COUNT(state) FROM pg_stat_database WHERE state = 'active'",
  // );
  response.status(200).json({
    updated_at: updatedAt,
    version_db: versionDB.rows[0].server_version,
    max_connection: parseInt(maxConnection.rows[0].max_connections),
    activity_connection: parseInt(activityConnections.rows[0].count),
  });
}

export default status;
