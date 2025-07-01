import {type AnyPgColumn, bigint, jsonb, pgTable, text, timestamp} from "drizzle-orm/pg-core";


export const risk_assessment = pgTable("risk_assessment", {
  id: bigint({mode: "number"}).primaryKey().generatedByDefaultAsIdentity(),
  result_json: jsonb(),
  risk_assessment_model_id: bigint({mode: "number"}).references(() => risk_assessment_model.id, {
    onDelete: "cascade",
  }),
  reg_dt: timestamp().notNull().defaultNow(),
})

export const risk_assessment_model = pgTable("risk_assessment_model", {
  id: bigint({mode: "number"}).primaryKey().generatedByDefaultAsIdentity(),
  model_name: text().notNull(),
  reg_dt: timestamp().notNull().defaultNow(),
})