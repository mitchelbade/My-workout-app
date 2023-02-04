class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        @user = User.create!(user_params)
        session[:user_id] = @user.id
        render json: @user, status: :created
    end

    def show
        if logged_in?
            render json: current_user
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
