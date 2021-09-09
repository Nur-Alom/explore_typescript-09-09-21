"use strict";
const salary = 7500;
const friendSalary = [7500, 4200, 8900, 6420, 10000, 7580, 6400, 2500];
const fName = ['nur', 'alom', 'islam'];
let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}
