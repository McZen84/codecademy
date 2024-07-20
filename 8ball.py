import random

name = "John"
question = "Nice weather today?"
answer = "" 

if name == "":
  print("Question: " + question)
else:
  print(name + " asked: " + question)

random_number = random.randint(1,9)

if random_number == 1:
  answer = "Yes - definitely"
elif random_number == 2:
  answer = "It is decidedly so"
elif random_number == 3:
  answer = "Without a doubt"
elif random_number == 4:
  answer = "Reply hazy, try again"
elif random_number == 5:
  answer = "Ask again later"
elif random_number == 6:
  answer = "Better not tell you now"
elif random_number == 7:
  answer = "Ask again later"
elif random_number == 8:
  answer = "Better not tell you now"
else: 
  answer = "Very doubtful"

print("Answer: " + answer)
