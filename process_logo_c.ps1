Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\yogen\OneDrive\Desktop\Cerso Landing Page\src\assets\cerso_logo.png"
$destPath = "c:\Users\yogen\OneDrive\Desktop\Cerso Landing Page\public\cerso-favicon.png"

$img = [System.Drawing.Image]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($img)

# 1. Find full bounding box
$minX = $bmp.Width; $minY = $bmp.Height; $maxX = 0; $maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        if ($bmp.GetPixel($x, $y).A -gt 10) {
            if ($x -lt $minX) { $minX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# 2. Find the first gap (column with no pixels) starting from minX
$gapX = $maxX
for ($x = $minX; $x -le $maxX; $x++) {
    $hasPixels = $false
    for ($y = $minY; $y -le $maxY; $y++) {
        if ($bmp.GetPixel($x, $y).A -gt 10) {
            $hasPixels = $true
            break
        }
    }
    if (-not $hasPixels) {
        $gapX = $x
        break
    }
}

# If the gap is too small or not found, just crop a square from the left edge
$cWidth = $gapX - $minX
$cHeight = $maxY - $minY + 1

if ($cWidth -eq 0 -or $cWidth -gt $cHeight * 1.5) {
    $cWidth = $cHeight
}

# 3. Create a new square bitmap padded a little bit
$pad = [int]($cWidth * 0.15)
$size = [math]::Max($cWidth, $cHeight) + $pad * 2

$outBmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($outBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$destX = [int](($size - $cWidth) / 2)
$destY = [int](($size - $cHeight) / 2)
$srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cWidth, $cHeight)
$destRect = New-Object System.Drawing.Rectangle($destX, $destY, $cWidth, $cHeight)

$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

# 4. Turn to white
for ($y = 0; $y -lt $outBmp.Height; $y++) {
    for ($x = 0; $x -lt $outBmp.Width; $x++) {
        $pixel = $outBmp.GetPixel($x, $y)
        if ($pixel.A -gt 10) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($pixel.A, 255, 255, 255))
        }
    }
}

# 5. Scale down to 128x128 for favicon
$finalBmp = New-Object System.Drawing.Bitmap(128, 128)
$g2 = [System.Drawing.Graphics]::FromImage($finalBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($outBmp, 0, 0, 128, 128)
$g2.Dispose()

$finalBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$finalBmp.Dispose()
$outBmp.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "Extracted C logo, width=$cWidth, height=$cHeight"
