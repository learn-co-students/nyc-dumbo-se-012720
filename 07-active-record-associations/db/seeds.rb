Player.destroy_all
Game.destroy_all

puts "Seeding games..."
names = [ "Daryl","Firuz","Gurjot","Jemy","Mavi","Pano","Tom","Wesley","Abid" ]
names.each do |name|
  Player.create(
    name: name,
    age: rand(1..18)
  )
end

# TODO: add Faker
40.times do
  Game.create(
    name: Faker::Game.title,
    genre: Faker::Game.genre,
    price: rand(5..60)
  )
end