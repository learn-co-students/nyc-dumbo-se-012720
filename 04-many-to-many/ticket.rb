class Ticket

  ALL = []

  attr_reader :passenger, :flight

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight
    ALL << self
  end

  def self.all 
    ALL
  end

  def inspect
    "<#{self.class} #{ passenger.name } on #{ flight.route }>"
  end

end

