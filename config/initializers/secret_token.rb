# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Mill::Application.config.secret_key_base = 'db8653e3f935d21541b75aedfe9d44c2e4e2f2ff9608440ca7ff242822d16f7eadee813ec720854b60236e5cc8360a4bfca3fd678999dfd02237040f2f5f5b83'
