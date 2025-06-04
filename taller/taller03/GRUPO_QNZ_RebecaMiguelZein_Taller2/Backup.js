const exec = require("child_process").exec;
const dockerUser = "postgres";
const dockerContainer = "bdavanzada-postgres";
const user = "rebe";
const database = "dvdrental";
const currentDate = new Date();
const fileName = `backup_${currentDate.toISOString().slice(0, 15)}.dump`;
const backupCommand = `docker exec -u ${dockerUser} ${dockerContainer} \
            pg_dump -U ${user} -F c -d ${database} -f /tmp/${fileName}`;
exec(backupCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  console.log(`Backup successful: ${stdout}`);
});

