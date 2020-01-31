class Tweet

  @@all = []

  attr_reader :message, :user

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self # self = the tweet being created
  end

  def self.all #class method
    @@all
  end

  def self.from_verified_users #class method

  end


end