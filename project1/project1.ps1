<#
Description: a script that finds and outputs files larger than 200MB on your hard drive
Input: The full path to the directory we want to find files larger than 200MB. For example: C:\bekho
Output: The output should contains the full path of the files larger than 200MB and the actual size of the file in MB.
References:
- How to convert bytes to MB in powershell
https://martin77s.wordpress.com/2017/05/20/display-friendly-file-sizes-in-powershell/
- How to find files with particular size
https://techiespice.com/2018/06/19/find-files-of-given-size-using-powershell/
#>
$path = Read-Host -Prompt "Please enter the path you want to find files larger than 200MB: (example: C:\bekho)"
Get-ChildItem $path -recurse | Where-Object {$_.length -gt 200MB} | fl fullname,@{N='SizeInMb';E={$_.length/1mb}}