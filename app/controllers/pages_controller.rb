class PagesController < ApplicationController
	def rank
		@saves = Save.all.order(score: :desc).limit(100)
	end
end