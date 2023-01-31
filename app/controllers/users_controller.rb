class UsersController < ApplicationController

    def create
        @user = User.create(user_params)
        if @user.valid?
            session[:user_id] = @user.id
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        if logged_in?
            render json: current_user
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
