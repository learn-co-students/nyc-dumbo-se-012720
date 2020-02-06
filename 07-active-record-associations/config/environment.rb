# database.yml configures database connection
require 'bundler/setup'
Bundler.require

ActiveRecord::Base.logger = Logger.new(STDOUT)

require_all 'app'