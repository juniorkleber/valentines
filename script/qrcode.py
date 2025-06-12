import qrcode

img = qrcode.make("https://juniorkleber.github.io/valentines/")
img.save("qrcode.png")
