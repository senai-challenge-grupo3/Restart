# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(nome: "Administrador", login: "admin", email: "restartinging@gmail.com", data_nascimento: "12/02/2018", password: "Restarting2018", password_confirmation: "Restarting2018", admin: true)
