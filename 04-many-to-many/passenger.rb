class Passenger

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def add_ticket(flight)
    Ticket.new(self, flight)
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights
    tickets.map do |ticket|
      ticket.flight
    end
  end

end
