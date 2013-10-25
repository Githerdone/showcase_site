def rndm_messages
  ['enabled', 'disabled', 'enabled', 'disabled', 'enabled'].sample
end

def rndm_gender
  ['male', 'female', 'male', 'female', 'male'].sample
end

def rndm_maritalstatus
  ['single', 'married', 'seperated', 'married', 'single', 'divorced', 'divorced', 'divorced', 'married', 'widowed', 'married', 'married'].sample
end

def rndm_relationship
  ['friend', 'guardian', 'grandparent', 'sibling', 'spouse'].sample
end

def rndm_age
  rand(1..110)
end

def rndm_insurance_company
  ['unitedhealth group', 'aetna group', 'HCSC group', 'blue shield', 'cigna health group', 'metropolitan group'].sample
end

def ssn_generator
  Random.new.rand(1_000_000_00..1_000_000_000 - 1).to_s.sub /(..)(....)$/, '-\1-\2'
end

def zip_generator
  rand(10000..100000).to_s
end

def dob_generator
  day = '%02d' % rand(1..28).to_s
  month = '%02d' % rand(1..12).to_s
  year = rand(1910..2012).to_s
  dob = day + '/' + month + '/' +  year
end

def phone_generator
  Random.new.rand(1_000_000_000..1_000_000_0000 - 1).to_s.sub /(...)(....)$/, '-\1-\2'
end

def insurance_number_generator
  '%02d' % rand(1000000..1000000000000).to_s
end

user = User.create(username: 'test', email: 'test@test.com', password: 'Danf0rth', password_confirmation: 'Danf0rth', admin: true)

50.times do
  user.patients.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, gender: rndm_gender, ssn: ssn_generator, dob: dob_generator, age: rndm_age, maritalstatus: rndm_maritalstatus, email: Faker::Internet.email, 
                      primaryphone: phone_generator, workphone: phone_generator, cellphone: phone_generator, emailmessages: rndm_messages, textmessages: rndm_messages )
end


patients = Patient.all

patients.each do |patient|
  patient.data_stores.create(address: {street: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state, zip: zip_generator}, 
                             emergencycontact: {firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, phone_number: phone_generator, relationship: rndm_relationship},
                             occupation: {title: Faker::Name.title, employername: Faker::Company.name, employerstreet: Faker::Address.street_address, employercity: Faker::Address.city, employerstate: Faker::Address.state, employerzip: zip_generator, employernumber: phone_generator}, 
                             insurance: {insurancename: rndm_insurance_company, groupnumber: insurance_number_generator, policynumber: insurance_number_generator, holderfirstname: Faker::Name.first_name,
                                         holderlastname: Faker::Name.last_name, holderage: rndm_age, holderdob: dob_generator, holderssn: ssn_generator, holderprimaryphone: phone_generator, holderworkphone: phone_generator, holdercellphone: phone_generator})
end


patients_married = Patient.all

patients_married.each do |patient|
  if patient.maritalstatus == 'married'
    patient.data_stores.first.update_attributes(spouse: { firstname: Faker::Name.first_name, lastname: Faker::Name.last_name,
                                                  gender: rndm_gender, dob: dob_generator, ssn: ssn_generator })
  end
end
