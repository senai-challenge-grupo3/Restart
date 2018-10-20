class MissionController < ApplicationController
	def index
		@save = Save.where(user: current_user)[0]

		if @save.recurso.nil?
			@save.recurso = 0;
		end
	end
end