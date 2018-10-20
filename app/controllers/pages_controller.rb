class PagesController < ApplicationController
	def home 
		@save = Save.where(user: current_user)[0]

		if @save.nil?
			@save = Save.new(user: current_user)
			@save.save
		end
	end

	def rank
		@saves = Save.all.order(score: :desc).limit(100)
	end
end