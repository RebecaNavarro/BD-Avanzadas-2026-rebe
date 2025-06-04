const cron = require("cron");
const { exec } = require("child_process");
require("dotenv").config();

const user_env = process.env.USER;
const dockerContainer_env = process.env.DOCKER_CONTAINER;
const database_env = process.env.DATABASE;
const folder_env = process.env.FOLDER;
const fileName_env = process.env.FILE_NAME;

const job = new cron.CronJob(
  "* * */2 * *",
  function () {
    console.log("You will delete a file every two days");
    const dockerUser = "postgres";
    const dockerContainer = "bdavanzada-postgres";
    const user = "rebe";
    const database = "dvdrental";
    const deleteCommand = `docker exec ${dockerContainer} find tmp/ -type f -mtime +2 -print -delete`;
    exec(deleteCommand, (deleteError, deleteStdout, deleteStderr) => {
      if (deleteError) {
        console.error(`Error deleting file: ${deleteError.message}`);
        return;
      }
      console.log(`File deleted successfully: ${deleteStdout}`);
    });
  },
  true
);

job.start();
console.log("Cron job started. It will log a message every two days.");
