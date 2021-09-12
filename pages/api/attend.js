import fs from "fs";
import { writeFile, access } from "fs/promises";
import rateLimit from "../../utils/rate-limit";
import * as uuid from "uuid";
import * as config from "../../config/api_config.json";
import { Low, JSONFile } from "lowdb";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

const attendJsonPath = "./data/attended.json";
const { CACHE_TOKEN } = config;

export default async function handler(req, res) {
  try {
    await limiter.check(res, 10, CACHE_TOKEN); // 10 requests per minute
    if (req.method === "POST" && req.body && req.body.name) {
      // handle submit name attended
      const { name } = req.body;

      if (typeof name === "string" && name.length) {
        const id = uuid.v4();
        const adapter = new JSONFile(attendJsonPath);
        const db = new Low(adapter);

        // Read data from JSON file, this will set db.data content
        try {
          await db.read();
        } catch (error) {
          db.data = [];
        }

        if (Array.isArray(db.data) && db.data.length) {
          for (let a = 0; a <= 10000; a++) {
            db.data.push({ id, name });
          }
        } else {
          db.data = [{ id, name }];
        }

        // Write db.data content to db.json
        await db.write();
      }

      res.json({ status: 200, message: "ok" });
    } else {
      res.status(404).json({ status: 404, message: "not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}
