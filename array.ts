
const salary: number = 7500;
const friendSalary: number[] = [7500, 4200, 8900, 6420, 10000, 7580, 6400, 2500];

const fName: string[] = ['nur', 'alom', 'islam'];

let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}

