import {drizzle} from "drizzle-orm/postgres-js";
import * as process from "node:process";
import postgres from "postgres";

//prepare: false => drizzle 이 connection pool 을 지원하지 않기 때문에 추가로 설정
const client = postgres(process.env.DATABASE_URL!, {prepare: false});

const db = drizzle(client)

export default db
