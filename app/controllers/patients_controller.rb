class PatientsController < ApplicationController

  def index
    patient = Patient.find(params[:id])
    data = patient.data_stores
    respond_to do |format|
      format.json   { render json: { patient: patient, data: data } }
    end
  end
end