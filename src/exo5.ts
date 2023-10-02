function filterEventNumbers(element: any) {
    return element % 2 === 0
}

var numbers: number[] = [10, 33, 46, 77, 20, 16, 100, 85].filter(filterEventNumbers)

console.log(numbers)

