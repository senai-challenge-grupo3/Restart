Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'

  get 'home', to: 'pages#home'

  get 'help', to: 'pages#ajuda'

  get 'ranking', to: 'pages#rank'

  get 'config', to: 'pages#config'

  get 'game', to: 'mission#index'
end
