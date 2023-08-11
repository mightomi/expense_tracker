import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
	"type": "postgres",
	"host": "localhost",
	"port": 5432,
	"username": "postgres",
	"database": "playo",
	"password": "postgres",
	"synchronize": true, 
	"logging": false,
	"entities": [
		"src/entity/**/*.ts"
	]
});

await AppDataSource.initialize();

export {
	AppDataSource
};
