Rails.application.routes.draw do
  
  # resources :program_workouts
  # resources :programs, only: [:index]
  resources :workout_exercises, only: [:index, :create, :update]
  resources :workouts
  resources :muscle_groups, only: [:index]
  resources :exercises, only: [:index, :show, :create, :update]
  # resources :users

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/workouts/exercises/:length', to: 'workouts#exercise_length'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end