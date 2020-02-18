class Student < ActiveRecord::Base 

    def name_and_hometown
        "#{self.name} from #{self.hometown}"
    end 
end 