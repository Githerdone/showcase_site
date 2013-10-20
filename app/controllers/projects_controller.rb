class ProjectsController < ApplicationController

	def index
	end

  def create
    # if current_user
    p params[:patient].first[:hstore].first
    p params[:patient].first[:hstore].first[:spouse]
      user = User.find(1)

      patient = user.patients.create(params[:patient].first[:info]).first
      p 'patient here' 
      p patient
      p '$' * 90
      p patient.data_stores.create(params[:patient].first[:hstore]).first
      
      p "I am here dude"
      redirect_to projects_path
    # else
    #   redirect_to projects_path
    # end
  end
end
