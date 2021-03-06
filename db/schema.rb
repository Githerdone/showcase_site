# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131020042934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "blogs", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "data_stores", force: true do |t|
    t.integer  "patient_id"
    t.hstore   "spouse"
    t.hstore   "address"
    t.hstore   "emergencycontact"
    t.hstore   "occupation"
    t.hstore   "insurance"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", force: true do |t|
    t.integer  "user_id"
    t.string   "firstname"
    t.string   "lastname"
    t.string   "gender"
    t.string   "ssn"
    t.string   "dob"
    t.integer  "age"
    t.string   "maritalstatus"
    t.string   "email"
    t.string   "primaryphone"
    t.string   "workphone"
    t.string   "cellphone"
    t.string   "emailmessages"
    t.string   "textmessages"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.hstore   "contact_data"
  end

  add_index "patients", ["contact_data"], name: "patients_contact_data", using: :gin

  create_table "projects", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",                               null: false
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "admin",                  default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
