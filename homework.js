
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так
//
//                                                     // Promise
//
// let rand = 0.3;
// function wakeUp(msg) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//             ?resolve(msg)
//                 : reject('oversleep')
//         }, 300);
//     })
// }
//
// function breakfast (bre) {
//     console.log('my breakfast')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//              ? resolve(bre)
//                 : reject ('I dont have time to have breakfast')
//         },1000);
//     })
// }
//
// function bus (bus) {
//     console.log('go to the bus stop')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(bus)
//                 : reject ('the bus didnt arrive')
//         },2000);
//     })
// }
//
//
// function shower (sho) {
//     console.log('go to shower')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(sho)
//                 : reject ('to be dirty')
//         },3000);
//     })
// }
//
// function work (wor) {
//     console.log('hello work')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(wor)
//                 : reject ('day off')
//         },800);
//     })
// }
//
// function dinner (din) {
//     console.log('tasty dinner')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(din)
//                 : reject ('not tasty hot dog')
//         },1500);
//     })
// }
// function coffeTime (coffe) {
//     console.log('cappuccino')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(coffe)
//                 : reject ('espresso')
//         },1500);
//     })
// }
// function tennis  (ten) {
//     console.log('play table tennis')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(ten)
//                 : reject ('no time')
//         },2000);
//     })
// }
//
// function home   (hom) {
//     console.log('go to home ')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(hom)
//                 : reject ('snow')
//         },4000);
//     })
// }
//
// wakeUp('alarm')
//     .then((result) => {
//         console.log(result);
//         return breakfast('sandwich')
//     })
//     .then((result) => {
//         console.log(result);
//         return bus('bogdan')
//     })
//     .then((result) => {
//         console.log(result);
//         return shower('shampoo')
//     })
//     .then((result) => {
//         console.log(result);
//         return work('hard work')
//     })
//     .then((result) => {
//         console.log(result);
//         return dinner('soup')
//     })
//     .then((result) => {
//         console.log(result);
//         return coffeTime('latte')
//     })
//     .then((result) => {
//         console.log(result);
//         return tennis('tennis table')
//     })
//     .then((result) => {
//         console.log(result);
//         return home('sleep')
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log('error', error);
//     })
//     .finally(() => {
//         console.log('final');
//     });



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
                                         // async

//
//
// let rand = 0.3;
// function wakeUp(msg) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//             ?resolve(msg)
//                 : reject('oversleep')
//         }, 300);
//     })
// }
//
// function breakfast (bre) {
//     console.log('my breakfast')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//              ? resolve(bre)
//                 : reject ('I dont have time to have breakfast')
//         },1000);
//     })
// }
//
//
// function shower (sho) {
//     console.log('go to shower')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(sho)
//                 : reject ('to be dirty')
//         },3000);
//     })
// }
// function bus (bus) {
//     console.log('go to the bus stop')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(bus)
//                 : reject ('the bus didnt arrive')
//         },2000);
//     })
// }
//
//
//
// function work (wor) {
//     console.log('hello work')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(wor)
//                 : reject ('day off')
//         },800);
//     })
// }
//
// function dinner (din) {
//     console.log('tasty dinner')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(din)
//                 : reject ('not tasty hot dog')
//         },1500);
//     })
// }
// function coffeTime (coffe) {
//     console.log('cappuccino')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(coffe)
//                 : reject ('espresso')
//         },1500);
//     })
// }
// function tennis  (ten) {
//     console.log('play table tennis')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(ten)
//                 : reject ('no time')
//         },2000);
//     })
// }
//
// function home   (hom) {
//     console.log('go to home ')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() >rand
//                 ? resolve(hom)
//                 : reject ('snow')
//         },4000);
//     })
// }
//
//
//
// async function regime() {
//
//     try {
//     let wak = await wakeUp(false);
//     let bre = await breakfast(wak);
//     let sho = await shower(bre);
//     let buss = await bus(sho);
//     let wor = await work(buss);
//     let din = await dinner(wor);
//     let cof = await coffeTime(din);
//     let ten = await tennis(cof);
//     let hom = await home(ten);
//
//     console.log(wak, 'wak');
//     console.log(bre, 'bre');
//     console.log(sho, 'sho');
//     console.log(buss, 'buss');
//     console.log(wor, 'wor');
//     console.log(din, 'din');
//     console.log(cof, 'cof');
//     console.log(ten, 'ten');
//     console.log(hom, 'hom');
//     } catch (err) {
//         console.error(err)
//     }
// }
//
// regime();
//
//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                  // callback hell


let rand = 0.1;
function wakeUp(callback) {
        setTimeout(() => {
            Math.random() >rand
            ?callback(null, 'wake up')
                : callback('oversleep')
        }, 300);
}

function breakfast (exam,callback) {
    console.log('my breakfast')
        setTimeout(() => {
            exam
             ? callback(null, "sandwich")
                : callback ('I dont have time to have breakfast')
        },1000);
}

function bus (exam,callback) {
    console.log('go to the bus stop')
        setTimeout(() => {
            exam
                ? callback(null,'bogdan')
                : callback ('the bus didnt arrive')
        },2000);

}


function shower (exam,callback) {
    console.log('go to shower')
        setTimeout(() => {
            exam
                ? callback(null,'shampoo')
                : callback ('to be dirty')
        },3000);

}

function work (exam,callback) {
    console.log('hello work')
        setTimeout(() => {
            exam
                ? callback(null,'hard day')
                : callback ('day off')
        },800);

}

function dinner (exam,callback) {
    console.log('tasty dinner')
        setTimeout(() => {
            exam
                ? callback(null,'soup')
                : callback ('not tasty hot dog')
        },1500);

}
function coffeTime (exam,callback) {
    console.log('cappuccino')
        setTimeout(() => {
            exam
                ? callback(null, 'latte')
                : callback ('espresso')
        },1500);

}
function tennis  (exam,callback) {
    console.log('play table tennis')
        setTimeout(() => {
            exam
                ? callback(null,'good game')
                : callback ('no time')
        },2000);

}

function home   (exam,callback) {
    console.log('go to home ')
        setTimeout(() => {
            exam
                ? callback(null, 'sleep')
                : callback ('snow')
        },4000);

}
wakeUp((error,data)=>{
    if (error){
        console.log(error, "wakeUp");
    }else{
        console.log(data);
        breakfast(true,(error,data)=>{
            if (error){
                console.log(error, 'breakfast');
            }else{
                console.log(data);
                bus(true,(error,data)=>{
                    if (error){
                        console.log(error,'bus')
                    }else {
                        console.log(data);
                        shower(true,(error,data)=>{
                            if (error){
                                console.log(error,'shower')
                            }else {
                                console.log(data);
                                work(true,(error,data)=>{
                                    if (error){
                                        console.log(error,'work')
                                    }else {
                                        console.log(data);
                                        dinner(true,(error,data)=>{
                                            if (error){
                                                console.log(error,'dinner')
                                            }else {
                                                console.log(data);
                                                coffeTime(true,(error,data)=>{
                                                    if (error){
                                                        console.log(error,'coffeTime')
                                                    }else {
                                                        console.log(data);
                                                        tennis(true,(error,data)=>{
                                                            if (error){
                                                                console.log(error,'tennis')
                                                            }else {
                                                                console.log(data);
                                                                home(false,(error,data)=>{
                                                                    if (error){
                                                                        console.log(error,'home')
                                                                    }else {
                                                                        console.log(data);
                                                                        console.log('Finish!!!')
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
} )