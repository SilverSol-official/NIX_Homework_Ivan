function createCalendar(elem, year, month) {

    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let iterator = 1;

    document.querySelector(elem).innerHTML = '<table class="table"></table>';
    document.querySelector('table').style.border = "solid black 1px";

    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        document.querySelector('table').appendChild(tr);
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            document.querySelectorAll('tr')[i].appendChild(td);
            if (i == 0) {
                document.querySelectorAll('tr')[0].querySelectorAll('td')[j].textContent = days[j];
            }

        }

    }

    let date = new Date(year, month - 1, 1);
    let day = date.getDay();

    let dayArr = document.querySelectorAll('td');

    let hight = false;
    if ((year % 4) == 0) { //first check
        if (((year % 100) == 0) && ((year % 400) == 0)) { //extra check
            hight = false;
        } else {
            hight = true
        };
    } else {
        hight = false
    }

    if (hight == false) {

        if (month < 8) {

            switch (month % 2 == 0) {
                case false:
                    for (let q = 0; q < 31; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
                case true:
                    if (month == 2) {
                        for (let q = 0; q < 28; q++) {
                            dayArr[6 + day + q].textContent = iterator;
                            iterator++;
                        }
                    } else {
                        for (let q = 0; q < 30; q++) {
                            dayArr[6 + day + q].textContent = iterator;
                            iterator++;
                        }
                    }
                    break;
            }
        } else {

            switch (month % 2 == 0) {
                case false:
                    for (let q = 0; q < 30; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
                case true:

                    for (let q = 0; q < 31; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
            }
        }
        iterator = 1;
    } else {

        if (month < 8) {
            switch (month % 2 == 0) {
                case false:
                    for (let q = 0; q < 31; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
                case true:
                    if (month == 2) {
                        for (let q = 0; q < 29; q++) {
                            dayArr[6 + day + q].textContent = iterator;
                            iterator++;
                        }
                    } else {
                        for (let q = 0; q < 30; q++) {
                            dayArr[6 + day + q].textContent = iterator;
                            iterator++;
                        }
                    }
                    break;
            }
        } else {
            switch (month % 2 == 0) {
                case false:
                    for (let q = 0; q < 30; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
                case true:

                    for (let q = 0; q < 31; q++) {
                        dayArr[6 + day + q].textContent = iterator;
                        iterator++;
                    }

                    break;
            }
        }
        iterator = 1;
    }
}
let callYear = prompt("Enter your year");
let callMonth = prompt('Enter your month');
createCalendar('.cal', callYear, callMonth);