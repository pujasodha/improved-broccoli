class ApplicationController < ActionController::API

    # extract user login using JWT token and finds user in database 
    def current_user 
        token = params[token]
        payload: Tokens.decode(token)
        @current_user ||= User.find_by_login(payload[0]['sub'])
    end

    # check if user is in database 
    def is_registered?
        current_user != nil
    end

    # return error if not registered 
    def authenticate_user  
        head :unauthorized unless is_registered?
    end
end
