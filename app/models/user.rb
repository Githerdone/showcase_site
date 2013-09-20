class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  attr_accessor :login

  validates_presence_of :username
  validates :username, length: { in: 3..20 }
  validates_uniqueness_of :username
  validates_format_of :useranme, with: /\A([a-z]((_?-?)([a-z])(_?-?))+[a-z])\z/i

  validates_presence_of :email
  validates_uniqueness_of :email
  validates_format_of :email, with: /\A([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)\z/i

  validates_presence_of :password
  validates :password, length: { in: 8..20 }
  validates_format_of :password, with: /\A(?=.*[^a-zA-Z])(?=.*[a-z])(?=.*[A-Z])\S{8,}\z/

  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      where(conditions).first
    end
  end


end
