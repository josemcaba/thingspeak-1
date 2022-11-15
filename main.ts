basic.showIcon(IconNames.SmallDiamond)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("IoT", "a1b2c3d4>>")
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    basic.showIcon(IconNames.SmallHeart)
    ESP8266_IoT.setData(
    "JBQ3F7SI645YFNT7",
    Environment.ReadLightIntensity(AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
    basic.showIcon(IconNames.Heart)
    basic.pause(60000)
})
