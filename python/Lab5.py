import datetime
while True:
    try:
        birthday = input("Please enter your birthday in the format of month/day/year (example: 04/22/2000):")
        bday = datetime.datetime.strptime(birthday, "%m/%d/%Y")
        break
    except:
        print("Please enter the correct date format of month/day/year (example: 04/22/2000)")

now = datetime.datetime.today()
alivetime = (now - bday).total_seconds()
print("You have been on earth for " + str(alivetime) + " seconds")