const getCash = function (amount, balance) {
    if (amount === 0) {
        console.log("Введите сумму больше нуля");
    } else if (amount > balance) {
        console.log("Недостаточно средств на счету");
    } else {
        console.log("Средства сняты");
    }
};

withdraw(0, 400); // Введите сумму больше нуля.
withdraw(600, 400); // Недостаточно средств на счету.
withdraw(100, 400); // Средства сняты

// Паттерн guard clause - это способ использовать возможность досрочного возврата из функции
// с помощью оператора return, чтобы сделать вложенные условные выражения
// более одномерными.

const getCash = function (amount, balance) {
    /*
     * Проверяется условие. Если оно выполняется, происходит
     * console.log и выход из функции. Код идущий после тела if
     * не выполнится.
     */
    if (amount === 0) {
        console.log("Введите сумму больше нуля");
        return;
    }

    /*
     * Если условие первого if не выполнилось, интерпретатор доходит до этого if.
     * Проверяется условие. Если оно выполняется, происходит
     * console.log и выход из функции. Код идущий после тела if
     * не выполнится.
     */
    if (amount > balance) {
        console.log("Недостаточно средств на счету.");
        return;
    }

    /*
     * Если ни один из предыдущих if не выполнился,
     * интерпретатор доходит до этого кода и выполняет его.
     */
    console.log("Средства сняты");
};

withdraw(0, 400); // Введите сумму больше нуля.
withdraw(600, 400); // Недостаточно средств на счету.
withdraw(100, 400); // Средства сняты