class ProjectsController < ApplicationController

	def index
    @patients = Patient.all
    respond_to do |format|
      format.html
      format.json { render json: patientlist }
    end
	end

  def create
    # if current_user
      user = User.find(1)
      patient = user.patients.create(params[:patient].first[:info]).first
      data = Hash.new
      params[:patient].first[:hstore].first.each do |key, value|
        data[key] = value.first
      end

      patient.data_stores.create(data)      
      redirect_to projects_path
    # else
    #   redirect_to projects_path
    # end
  end


end
