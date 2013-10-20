class CreateDataStores < ActiveRecord::Migration
  def change
    create_table :data_stores do |t|
      t.belongs_to :patient
      t.hstore :spouse
      t.hstore :address
      t.hstore :emergencycontact
      t.hstore :occupation
      t.hstore :insurance

      t.timestamps
    end
  end
end
