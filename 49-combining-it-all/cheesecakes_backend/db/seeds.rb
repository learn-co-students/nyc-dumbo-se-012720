randy = User.create(username: "Randy", password: "abc123")
nicky = User.create(username: "Nicky", password: "abc123")

arrayOfChips = [
  {
    name: "Doritos",
    brand: "Frito-Lay"
  },
  {
    name: "Fritos",
    brand: "Frito-Lay"
  },
  {
    name: "Pringles",
    brand: "Kellogg"
  },
  {
    name: "Cheez-It",
    brand: "Kellogg"
  }
]

Chip.create(arrayOfChips)

5.times do
  UserChip.create(user: User.all.sample, chip: Chip.all.sample)
end
