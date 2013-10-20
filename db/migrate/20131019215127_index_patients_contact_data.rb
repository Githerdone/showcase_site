class IndexPatientsContactData < ActiveRecord::Migration
  def change
    execute "CREATE INDEX patients_contact_data ON patients USING GIN(contact_data)"
  end
end
