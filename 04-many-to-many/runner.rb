require 'pry'

require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

daryl = Passenger.new("Daryl")           
firuz = Passenger.new("Firuz")           
gurjot = Passenger.new("Gurjot")         
jemy = Passenger.new("Jemy")             
mavi = Passenger.new("Mavi")             
pano = Passenger.new("Pano")             
tom = Passenger.new("Tom")              
wesley = Passenger.new("Wesley")         
abid = Passenger.new("Abid")    

nyc_bora_bora = Flight.new("JFK-BOB")   
nyc_maldives = Flight.new("JFK-MLE")   
nyc_tokyo = Flight.new("JFK-HND")   
nyc_prague = Flight.new("JFK-PRG")   
nyc_algiers = Flight.new("LGA-ALG")   
nyc_hokkaido = Flight.new("JFK-AKJ")   
santiago_robinson_crusoe_island = Flight.new("SCL-SCIR")  
nyc_san_francisco = Flight.new("EWR-SFO")   
nyc_narita = Flight.new("JFK-NRT")   

daryl.add_ticket nyc_bora_bora
daryl.add_ticket nyc_maldives
daryl.add_ticket nyc_tokyo
firuz.add_ticket nyc_maldives
gurjot.add_ticket nyc_tokyo
jemy.add_ticket nyc_prague
mavi.add_ticket nyc_algiers
mavi.add_ticket nyc_prague
pano.add_ticket nyc_algiers
pano.add_ticket nyc_hokkaido
pano.add_ticket nyc_narita
tom.add_ticket santiago_robinson_crusoe_island
wesley.add_ticket nyc_san_francisco
abid.add_ticket nyc_narita



binding.pry

false
