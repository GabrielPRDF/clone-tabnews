// @ts-ignore
test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  // @ts-ignore
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);
  // @ts-ignore
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  // @ts-ignore
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  // @ts-ignore
  expect(responseBody.version_db).toBe(
    "PostgreSQL 16.9 on x86_64-pc-linux-musl, compiled by gcc (Alpine 14.2.0) 14.2.0, 64-bit",
  );

  // @ts-ignore
  expect(Number(responseBody.max_connection)).toBe(100);

  // @ts-ignore
  expect(Number(responseBody.activity_connection)).toBe(1);
});
