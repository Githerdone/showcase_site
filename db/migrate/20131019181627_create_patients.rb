class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.belongs_to :user
      t.string :firstname
      t.string :lastname
      t.string :gender
      t.string :ssn
      t.date  :dob
      t.integer :age
      t.string :maritalstatus
      t.string :email
      t.string :primaryphone
      t.string :workphone
      t.string :cellphone
      t.boolean :emailmessages
      t.boolean :textmessages
      t.timestamps
    end
  end
end
