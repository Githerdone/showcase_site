class Patient < ActiveRecord::Base
  belongs_to :user
  has_many :data_stores
end
