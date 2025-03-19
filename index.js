const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(double) {
   return function (fare) {
      return fare * double;
   };
}

const fareDoubler = createFareMultiplier(2);

function createFareMultiplier(triple) {
    return function (fare) {
       return fare * triple;
    };
 }
 
 const fareTripler = createFareMultiplier(3);

 const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 function selectDifferentDrivers (drivers, driversFunction) {
    return driversFunction(drivers);
 }