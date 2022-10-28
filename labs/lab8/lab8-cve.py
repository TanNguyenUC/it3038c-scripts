import requests, re
from bs4 import BeautifulSoup

r = requests.get("https://www.cvedetails.com/").content
soup = BeautifulSoup(r, 'html.parser')

VulnNum = soup.findAll("a", attrs={'title':re.compile("Vulnerabilities with a cvss")})
scores = soup.findAll("th", attrs={'style':re.compile("background-color")})
VulnNumList = []
ScoresList = []
for num in VulnNum:
    VulnNumList.append(num.text.strip())
for score in scores:
    ScoresList.append(score.text.strip())
result = zip(VulnNumList, ScoresList)
for i, j in result:
    print("There are " + i + " vulnerabilities that has a cvss score of " + j)