/** Display year is kabisat and display month */

function getDays(month,year){
    if(isNaN(month) && isNaN(year)){
        return 'inputan bulan & tahun harus dalam integer'
    }else if(isNaN(month)){
        return 'inputan bulan harus dalam integer'
    }else if(isNaN(year)){
        return 'inputan tahun harus dalam integer'
    }else{
        if(year % 4 === 0){
            if(month===1){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===2){
                return 'This month has 29 days, 2000 adalah tahun kabisat'

            }else if(month===3){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===4){
                return 'This month has 30 days, 2000 adalah tahun kabisat'

            }else if(month===5){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===6){
                return 'This month has 30 days, 2000 adalah tahun kabisat'

            }else if(month===7){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===8){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===9){
                return 'This month has 30 days, 2000 adalah tahun kabisat'

            }else if(month===10){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }else if(month===11){
                return 'This month has 30 days, 2000 adalah tahun kabisat'

            }else if(month===12){
                return 'This month has 31 days, 2000 adalah tahun kabisat'

            }

        }else{
            if(month===1){
                return 'This month has 31 hari'

            }else if(month===2){
                return 'This month has 29 hari'

            }else if(month===3){
                return 'This month has 31 hari'

            }else if(month===4){
                return 'This month has 30 hari'

            }else if(month===5){
                return 'This month has 31 hari'

            }else if(month===6){
                return 'This month has 30 hari'

            }else if(month===7){
                return 'This month has 31 hari'

            }else if(month===8){
                return 'This month has 31 hari'

            }else if(month===9){
                return 'This month has 30 hari'

            }else if(month===10){
                return 'This month has 31 hari'

            }else if(month===11){
                return 'This month has 30 hari,'

            }else if(month===12){
                return 'This month has 31 hari'

            }

        }
    }
    
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari