export default (): void => {
  console.log("\nSetup test environment");
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

  console.log("process.env.TEST_DATABASE_URL", process.env.DATABASE_URL);
  return;
};