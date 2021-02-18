function printFib(n) {
    if (n <= 2) return 1;
        return printFib(n-1) + printFib(n-2);
    }
    
    printFib(10);