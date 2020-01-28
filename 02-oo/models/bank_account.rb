class BankAccount

  attr_reader :balance #getter 
  attr_accessor :account_holder_name
  # attr_writer :account_holder_name

  def initialize(account_holder_name, initial_balance)
    @account_holder_name = account_holder_name
    @balance = initial_balance
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end

  # def account_holder_name #getter
  #   @account_holder_name
  # end

  # def account_holder_name=(new_name) #setter
  #   @account_holder_name = new_name 
  # end

  # def balance
  #   @balance
  # end

end



