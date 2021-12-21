
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так



let rand = 0.3;

function wakeUp(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
            ?resolve(msg)
                : reject('oversleep')
        }, 300);
    })
}

function breakfast (bre) {
    console.log('my breakfast')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
             ? resolve(bre)
                : reject ('I dont have time to have breakfast')
        },1000);
    })
}

function bus (bus) {
    console.log('go to the bus stop')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(bus)
                : reject ('the bus didnt arrive')
        },2000);
    })
}


function shower (sho) {
    console.log('go to shower')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(sho)
                : reject ('to be dirty')
        },3000);
    })
}

function work (wor) {
    console.log('hello work')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(wor)
                : reject ('day off')
        },800);
    })
}

function dinner (din) {
    console.log('tasty dinner')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(din)
                : reject ('not tasty hot dog')
        },1500);
    })
}
function coffeTime (coffe) {
    console.log('cappuccino')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(coffe)
                : reject ('espresso')
        },1500);
    })
}
function tennis  (ten) {
    console.log('play table tennis')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(ten)
                : reject ('no time')
        },2000);
    })
}

function home   (hom) {
    console.log('go to home ')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >rand
                ? resolve(hom)
                : reject ('snow')
        },4000);
    })
}

wakeUp('alarm')
    .then((result) => {
        console.log(result);
        return breakfast('sandwich')
    })
    .then((result) => {
        console.log(result);
        return bus('bogdan')
    })
    .then((result) => {
        console.log(result);
        return shower('shampoo')
    })
    .then((result) => {
        console.log(result);
        return work('hard work')
    })
    .then((result) => {
        console.log(result);
        return dinner('soup')
    })
    .then((result) => {
        console.log(result);
        return coffeTime('latte')
    })
    .then((result) => {
        console.log(result);
        return tennis('tennis table')
    })
    .then((result) => {
        console.log(result);
        return home('sleep')
    })
    .then((result) => {
        console.log(result);
    })
    .catch(error => {
        console.log('error', error);
    })
    .finally(() => {
        console.log('final');
    });