class AddHstoreColumn < ActiveRecord::Migration
  def change
    add_column :patients, :contact_data, :hstore
  end
end
