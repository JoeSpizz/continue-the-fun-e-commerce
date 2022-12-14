# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_08_185848) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boardgames", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "min_players"
    t.integer "max_players"
    t.integer "min_playtime"
    t.string "image_url"
  end

  create_table "carts", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "marketplace_item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["marketplace_item_id"], name: "index_carts_on_marketplace_item_id"
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "marketplace_items", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "boardgame_id"
    t.integer "price"
    t.string "title"
    t.string "condition"
    t.string "condition_detail"
    t.boolean "available"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
    t.string "seller"
    t.index ["boardgame_id"], name: "index_marketplace_items_on_boardgame_id"
    t.index ["user_id"], name: "index_marketplace_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "zipcode"
  end

  create_table "wishlists", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "boardgame_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["boardgame_id"], name: "index_wishlists_on_boardgame_id"
    t.index ["user_id"], name: "index_wishlists_on_user_id"
  end

end
