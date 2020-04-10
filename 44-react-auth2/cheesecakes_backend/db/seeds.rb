eric = User.create(username: "Eric", password: "abc123")
nicky = User.create(username: "Nicky", password: "abc123")

Cheesecake.create(user: eric, name: "Imaginary")
nicky.cheesecakes.create(name: "Oreo")
nicky.cheesecakes.create(name: "New York")
