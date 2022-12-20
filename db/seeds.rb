# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# https://api.boardgameatlas.com/api/search?limit=100&skip=0&pretty=true&client_id=cXouSHFcOH
# use this for seeding board games. You'll want to run multiple and up the skip by 100 each time to get full list. 

MarketplaceItem.create(title: "Risk", user_id: 1, price: 12, condition: "Decent", condition_detail: "scuffed edges and bent cards", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254847937-51zyVWbt8aL.jpg")
MarketplaceItem.create(title: "Catan [original]", user_id: 1, price: 6.50, condition: "Like New", condition_detail: "unopened! I got two for Christmas", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg")
MarketplaceItem.create(title: "Dominion", user_id: 1, price: 5, condition: "Good", condition_detail: "Only played a few times", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200326-6135RVKbZZL.jpg")
MarketplaceItem.create(title: "Above and Below", user_id: 1, price: 30, condition: "Like New", condition_detail: "Wife doesn't like the game, played it once", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1605133478422")
MarketplaceItem.create(title: "Phase 10", user_id: 1, price: 3.50, condition: "Decent", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1596731140183")
MarketplaceItem.create(title: "Dark Seas", user_id: 1, price: 20, condition: "Sub-par", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257574549-61JK1N4bIFL.jpg")
MarketplaceItem.create(title: "Cribbage: Antique Board!!", user_id: 1, price: 5, condition: "decent", condition_detail: "This board was made in 1857, I will include a deck of cards but they'll be new", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254873442-51Hhf2C2D2BL.jpg")
MarketplaceItem.create(title: "Yahtzee", user_id: 2, price: 5, condition: "Decent", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254579427-51BEc6Rs7BL.jpg")
MarketplaceItem.create(title: "Cranium ", user_id: 2, price: 15, condition: "Good", condition_detail: "Had it for a few years, recently got new play-dough for the sculpt cards.", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257971068-61kl-PbXZRL.jpg")
MarketplaceItem.create(title: "Pandemic", user_id: 2, condition: "Bad", condition_detail: "The game is great, the board is beat up and the cards are damaged but this is a great game!", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254186140-51iNoyxoamL.jpg")
MarketplaceItem.create(title: "Monopoly", user_id: 2, price: 10, condition: "Decent", condition_detail: "The original pieces are in this set", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1609460299342")

MarketplaceItem.create(title: "Munchkin", user_id: 2, condition: "Decent", condition_detail: "Some bent cards and we've had the game for awhile", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559255092866-51fY4GdN2jL.jpg")
MarketplaceItem.create(title: "Snail Pace Race", user_id: 2, condition: "Good", condition_detail: "A great game to teach your toddlers colors!", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1545151773980")
MarketplaceItem.create(title: "Chutes and Ladders", user_id: 2, condition: "Decent", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257651312-514kufGk5qL.jpg")
MarketplaceItem.create(title: "Betrayal at House on the Hill", user_id: 2, condition: "Decent", condition_detail: "Some scuffs on the board tiles and a few bent cards. But this game is so much fun. The random adventure every time is pretty ingenious!", available: true, image_url: "")
MarketplaceItem.create(title: "7 Wonders: Duel", user_id: 2, condition: "Good", condition_detail: "This is the two player version of 7 Wonders.", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629323024736.jpg")
MarketplaceItem.create(title: "Dominioes", user_id: 2, condition: "Decent", condition_detail: "An old set from my grandparents. In suprisingly good condition considering it's age but still.", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254476141-41xnMsIONmL.jpg")
MarketplaceItem.create(title: "King of Tokyo", user_id: 2, condition: "Bad", condition_detail: "Honestly if this game wasn't so nostalgic for me I probably wouldn't list it. But it is good for HOURS fo fun.", available: true, image_url: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257600208-61doPBeJTjL.jpg")