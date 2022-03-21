// Type the how many second you want to countdown  
let last = 10
basic.showNumber(last)
while (!(last == 0)) {
    basic.showNumber(last - 1)
    last += -1
    basic.pause(1000)
}
basic.forever(function () {
	
})
