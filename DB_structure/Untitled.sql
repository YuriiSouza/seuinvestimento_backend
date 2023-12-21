CREATE TABLE "user" (
  "user_id" intreger,
  "first_name" varchar,
  "last_name" varchar,
  "cpf" intreger[4],
  PRIMARY KEY ("user_id", "cpf")
);

CREATE TABLE "user_contact" (
  "contac_id" intreger PRIMARY KEY,
  "email" varchar,
  "number_phone" varchar
);

CREATE TABLE "invest_types" (
  "type_id" intreger PRIMARY KEY,
  "type" varchar[]
);

CREATE TABLE "user_info" (
  "info_id" intreger PRIMARY KEY,
  "age" intreger,
  "gender" varchar,
  "race" varchar,
  "type" varchar
);

ALTER TABLE "user_info" ADD FOREIGN KEY ("type") REFERENCES "invest_types" ("type_id");

ALTER TABLE "user" ADD FOREIGN KEY ("user_id") REFERENCES "user_info" ("info_id");

ALTER TABLE "user" ADD FOREIGN KEY ("user_id") REFERENCES "user_contact" ("contac_id");
