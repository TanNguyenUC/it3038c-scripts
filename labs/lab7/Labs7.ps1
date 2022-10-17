$path = Read-Host -Prompt "Please enter the path you want to find files larger than 2MB: (example: C:\bekho)"
$files = (Get-ChildItem $path -recurse | Where-Object {$_.length -gt 2MB}) | % {$_.FullName}
$numFiles = $files.Count

# Check if there are 2 files larger than 2MB, the -Logpath value might be different
if($files.Count -eq 2)
{
    Write-LogWarning -LogPath C:\warning.log -Message "There are $numFiles files larger than 2MB"
}

# Output the fullname of files larger than 2MB to a file, the -Logpath value might be different
Foreach($file in $files)
{
    $filesize = $file.length
    Write-Loginfo -LogPath C:\FileOver2MB.log -Message "Name: $file, Size: $filesize" -TimeStamp
}

# Stop processing the log file confirmation and exit the script, the -Logpath value might be different
$confirmation = Read-Host "Do you want to stop the log file? (Type Y to proceed)"
if ($confirmation -eq 'Y') {
    Stop-Log -LogPath C:\FileOver2MB.log -ToScreen
}