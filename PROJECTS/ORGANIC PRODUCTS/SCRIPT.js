function load() {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    
    var counterElement1 = document.getElementById("r1");
    var counterElement2 = document.getElementById("r2");
    var counterElement3 = document.getElementById("r3");
    var counterElement4 = document.getElementById("r4");
    
    var loop1 = setInterval(incrementCounter1, 00);
    var loop2 = setInterval(incrementCounter2, 00);
    var loop3 = setInterval(incrementCounter3, 00);
    var loop4 = setInterval(incrementCounter4, 00);

    function incrementCounter1() {
        count1++;
        counterElement1.innerHTML = count1;
        if (count1 == 1880) {
            clearInterval(loop1);
        }
    }

    function incrementCounter2() {
        count2++;
        counterElement2.innerHTML = count2;
        if (count2 == 697) {
            clearInterval(loop2);
        }
    }

    function incrementCounter3() {
        count3++;
        counterElement3.innerHTML = count3;
        if (count3 == 440) {
            clearInterval(loop3);
        }
    }

    function incrementCounter4() {
        count4++;
        counterElement4.innerHTML = count4;
        if (count4 == 2870) {
            clearInterval(loop4);
        }
    }
}
