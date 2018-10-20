class ColonyController < ApplicationController
	def index
		@save = Save.where(user: current_user)[0]
	end
end