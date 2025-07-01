import {bigint, pgSchema, pgTable, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {risk_assessment} from "~/features/result/schema";

// supabase user 와 foreign key 를 설정하기 위해 dummy user 설정
// sql 생성시 아래 설정과 관련된 SQL 은 삭제해 주어야 한다
export const users = pgSchema("auth").table("users", {
  id: uuid().primaryKey(),
});

// postgres 에서 varchar / text type 간의 차이는 거의 없다
export const search_history = pgTable('search_history', {
  id: bigint({mode: "number"}).primaryKey().generatedByDefaultAsIdentity(),
  user_id: uuid().references(() => users.id, {onDelete: "cascade"}),
  risk_assessment_id: bigint({mode: "number"}).references(() => risk_assessment.id, {onDelete: "cascade"}),
  postno: text().notNull(),
  address: text().notNull(),
  detail_address: text().notNull(),
  reg_dt: timestamp().notNull().defaultNow(),
});

export const update_password_history = pgTable('update_password_history', {
  id: bigint({mode: "number"}).primaryKey().generatedByDefaultAsIdentity(),
  user_id: uuid().references(() => users.id, {onDelete: "cascade"}),
  password: text().notNull(),
  reg_dt: timestamp().notNull().defaultNow(),
})

