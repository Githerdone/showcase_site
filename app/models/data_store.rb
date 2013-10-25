class DataStore < ActiveRecord::Base
  belongs_to :patient

  validates_uniqueness_of :patient_id
end
