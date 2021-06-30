const functions =
{
    add: (a, b) => a + b,
    average: (a, b) => functions.add(a, b) / 2,
    dispersion: (a, b) => (functions.average(a, b) - a) / b
}


module.exports = functions;
