

// given an integer or a floating point number find its opposite;
    function getOpposite(number) {
        return -number;
    }

    console.log(getOpposite(-5));
    

    function opposite(num) {
       if (num > 0) {
        return -num;
       }else{
        return Math.abs(num);
       }
    }
    console.log(opposite(0));

    function opposite1(number) {
        return number * -1;
    }       
    console.log(opposite1(5.5));

    function getOpposite2(number) {
        if (number === 0) {
            return 0;
        } else {
            return number > 0 ? -number : Math.abs(number);
        }
    }
    console.log(getOpposite2(0));

    function getOpposite3(number) {
        return (number === 0) ? 0 : (number > 0 ? -number : Math.abs(number));
    }
    console.log(getOpposite3(-3.3));