Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\yogen\OneDrive\Desktop\Cerso Landing Page\src\assets\cerso_logo.png"
$destPath = "c:\Users\yogen\OneDrive\Desktop\Cerso Landing Page\public\cerso-favicon.png"

$img = [System.Drawing.Image]::FromFile($srcPath)

# Calculate new size (max width 256)
$ratio = $img.Width / $img.Height
$newWidth = 256
$newHeight = [int]($newWidth / $ratio)

$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $newWidth, $newHeight)
$g.Dispose()

# Make it white
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 10) {
            # Make it solid white but keep alpha
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($pixel.A, 255, 255, 255))
        }
    }
}

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$img.Dispose()

Write-Output "Image processed successfully."
