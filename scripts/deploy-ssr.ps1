param(
  [string]$AppRoot = "C:\inetpub\01com-v2",
  [string]$ServiceName = "01com-v2",
  [string]$Branch = "main",
  [switch]$SkipGitPull
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

Set-Location -LiteralPath $AppRoot

if (-not $SkipGitPull) {
  git fetch origin $Branch
  git checkout $Branch
  git pull --ff-only origin $Branch
}

npm ci
npm run build

$service = Get-Service -Name $ServiceName -ErrorAction Stop
if ($service.Status -eq "Running") {
  Restart-Service -Name $ServiceName
} else {
  Start-Service -Name $ServiceName
}

Write-Host "Deployed $Branch to $AppRoot and started service $ServiceName."
