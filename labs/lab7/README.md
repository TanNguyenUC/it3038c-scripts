# Lab7 Instruction
#### Here is how you can run a Powershell script that I created, which uses a plugin called PSLogging.
#### First, let's install the module

```powershell
Install-Module -Name PSLogging
```


After that, run the script and type in the path we want to find files larger than 2MB. For example:

```
C:\nguye5tn
```


The script will check the total files larger than 2MB, and if there are two files larger than 2MB, it will log the warning to C:\warning.log. The ToScreen option will display the warning message to the console.

```powershell
if($files.Count -eq 2)
{
    Write-LogWarning -LogPath C:\warning.log -Message "There are $numFiles files larger than 2MB" -ToScreen
}
```


Then, the script will log the fullname of files larger than 2MB to C:\FileOver2MB.log.

```powershell
Foreach($file in $files)
{
    $filesize = $file.length
    Write-Loginfo -LogPath C:\FileOver2MB.log -Message "Name: $file, Size: $filesize" -TimeStamp
}
```


Lastly, the script ask users whether they want to stop processing the log files or not. Type Y (the only option) to stop processing the log file. The ToScreen option will display the stop processing message to the console.

```powershell
$confirmation = Read-Host "Do you want to stop the log file? (Type Y to proceed)"
if ($confirmation -eq 'Y') {
    Stop-Log -LogPath C:\FileOver2MB.log -ToScreen
}
```
