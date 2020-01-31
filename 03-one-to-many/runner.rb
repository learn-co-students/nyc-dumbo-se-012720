require 'pry'
require_relative 'models/tweet'
require_relative 'models/user'

coffee_dad = User.new("coffee_dad")
lizzo = User.new("lizzo")

coffee_dad.post_tweet("drinking coffee#")
coffee_dad.post_tweet("enjoying coffee")
coffee_dad.post_tweet("cup #of coffee")
coffee_dad.post_tweet("Death must come to us all.")

lizzo.post_tweet("If you can love me, you can love yourself")
lizzo.post_tweet("If he don't love you any more...")
lizzo_tweet = lizzo.post_tweet("...then walk your fine ass out the door")

Tweet.all

binding.pry

false

