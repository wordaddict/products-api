const appName = "Product API"

const config = {
    app_name: appName,
    api_server: {
        port: process.env.PORT
    },
    logging: {
        shouldLogToFile: process.env.ENABLE_FILE_LOGGING,
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || 'warn',
        console: process.env.LOG_ENABLE_CONSOLE || true,
      },
    mongodb: {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DB_NAME,
    collections: {
        products: 'products',
    },
    query_limit: process.env.MONGODB_QUERY_LIMIT,
    },
    mongodb_url: process.env.MONGODB_URI
}

module.exports = config;