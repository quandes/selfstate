<#
setup-gh-powershell.ps1

Installs GitHub CLI via winget (Windows) and enables PowerShell completion
by adding an idempotent line to the user's PowerShell profile.

Usage: Run from PowerShell with elevated privileges if required:
  powershell -ExecutionPolicy Bypass -File .\scripts\setup-gh-powershell.ps1
#>

$ErrorActionPreference = 'Stop'

Write-Host "== SelfState: setup-gh-powershell =="

if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    Write-Host "winget not found. Please install the App Installer from Microsoft Store and retry." -ForegroundColor Yellow
    exit 1
}

Write-Host "Installing GitHub CLI (gh) via winget (non-interactive accept)..."
winget install --id GitHub.cli -e --source winget --accept-source-agreements --accept-package-agreements
if ($LASTEXITCODE -ne 0) {
    Write-Host "winget installation returned exit code $LASTEXITCODE" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "Configuring PowerShell completion for gh in your profile..."
if (-not (Test-Path -Path $PROFILE)) {
    New-Item -Type File -Path $PROFILE -Force | Out-Null
}

$completionLine = 'Invoke-Expression (&gh completion -s powershell)'
try {
    if (-not (Select-String -Path $PROFILE -Pattern [regex]::Escape($completionLine) -SimpleMatch -Quiet)) {
        Add-Content -Path $PROFILE -Value $completionLine
        Write-Host "Added gh completion to $PROFILE"
    } else {
        Write-Host "gh completion already present in $PROFILE"
    }
} catch {
    Write-Host ("Could not write to {0}: {1}" -f $PROFILE, $_) -ForegroundColor Yellow
}

try {
    Invoke-Expression (&gh completion -s powershell)
    Write-Host "Applied gh completion to current session."
} catch {
    Write-Host "Could not apply completion to current session: $_" -ForegroundColor Yellow
}

Write-Host "Installation script finished. Run 'gh --version' to verify." 
