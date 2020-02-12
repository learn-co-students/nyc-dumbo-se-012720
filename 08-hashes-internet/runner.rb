require_relative "config/environment"

prompt = TTY::Prompt.new

puts "Welcome! Please log in."
username = gets.chomp

user = User.find_by(name: username)

# choices = [
#   { name: 'small', value: 1 },
#   { name: 'medium', value: 2 },
#   { name: 'large', value: 3 }
# ]

choices = Book.all.map do |book|
  {
    name: book.title,
    value: book.id
  }
end

book_id = prompt.select("Choose a book to like:", choices)

Like.create(user_id: user.id, book_id: book_id)


puts "Here are the books you like:"
user.books.each do |book|
  puts "#{ book.title } -- #{ book.author }"
end

# Like.all.user_id

# Like.find_by(id_user: user.id)

# books = Book.all

# books.each do |book|
#   puts "#{ book.id }) #{ book.title }"
# end

# book_id = gets 

# binding.pry



# 0