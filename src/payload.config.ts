import { sqliteAdapter } from "@payloadcms/db-sqlite";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { Users } from "./collections/Users.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUrl = process.env.DATABASE_URI || "file:./payload.db";
const payloadSecret =
  process.env.PAYLOAD_SECRET || "dev-only-payload-secret-change-me";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(
        dirname,
        "app",
        "(payload)",
        "admin",
        "importMap.js",
      ),
    },
  },
  collections: [Users],
  db: sqliteAdapter({
    client: {
      url: databaseUrl,
    },
  }),
  secret: payloadSecret,
  serverURL: serverUrl,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
