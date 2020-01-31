require_relative 'tweet'

class User

  attr_reader :username

  def initialize(username) # this is pretty much .new
    @username = username
    # @tweets = [] #NO second source of truth
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
    # @tweets << tweet
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  # def delete_all_tweets
  #   @tweets = []
  # end

  def inspect
    "<User #{ self.username }>"
  end

end