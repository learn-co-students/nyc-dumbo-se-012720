puts "Seeding games..."
names = [ "Daryl","Firuz","Gurjot","Jemy","Mavi","Pano","Tom","Wesley","Abid" ]
names.each do |name|
  Player.create(
    name: name,
    age: rand(1..18)
  )
end

# TODO: add Faker
