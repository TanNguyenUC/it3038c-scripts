$PowershellVersion = $HOST.Version.Major
$Hostname = hostname
$User = $env:UserName
$IP = (get-netipaddress).ipv4address | Select-String "192*"
$Date = Get-Date -UFormat "%A, %m %d %Y"
$Body="This machine's IP is $IP. User is $User. Hostname is $Hostname. Powershell Version $PowershellVersion. Today's Date is $Date"
Send-MailMessage -To "nguye5tn@mail.uc.edu" -From "someone@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)