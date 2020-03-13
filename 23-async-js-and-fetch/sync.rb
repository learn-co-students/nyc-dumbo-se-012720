require 'rest-client'
require 'json'
require 'pry'

puts "Getting you a pokemon..."
sleep(3)

response = RestClient.get("https://pokeapi.co/api/v2/pokemon/1/")
pokemon = JSON.parse(response)

binding.pry

puts "Your pokemon is: #{pokemon["name"]}"