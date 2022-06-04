import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, ".env") });

interface ENV {
    DB_PASSWORD: string | undefined;
}

interface Config {
    DB_PASSWORD: string;
}

const getConfig = (): ENV => {
    return {
        DB_PASSWORD: process.env.DB_PASSWORD
    };
};

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;