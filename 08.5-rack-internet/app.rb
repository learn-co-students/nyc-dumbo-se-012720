require 'pry'

class App

  def call(environment_hash)

    status_code = 200
    header = { "Content-type" =>  "text/html" }

    if environment_hash["REQUEST_PATH"] == "/potato"
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>🥔</body>
        </html>"]
    elsif environment_hash["REQUEST_PATH"] == "/"
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>Hello, world!</body>
        </html>"]
    else
      status_code = 404
      body = ["<html>
        <head>
          <meta charset=\"utf-8\" />
        </head>
        <body>🖕</body>
        </html>"]

      end


    return [status_code, header, body]
  end

end
