const containers = [
    {
        name: "Cone",
        price: 1.50,
        quantity: 0
    },
    {
        name: "Waffle Cone",
        price: 2.00,
        quantity: 0
    },
    {
        name: "Cup",
        price: 0,
        quantity: 0
    }
]

const flavors = [
    {
        name: "Vanilla",
        price: 1.00,
        quantity: 0,
    },
    {
        name: "Chocolate",
        price: 1.50,
        quantity: 0,
    },
    {
        name: "Strawberry",
        price: 2.00,
        quantity: 0,
    }
]

const toppings = [
    {
        name: "Sprinkles",
        price: .50,
        quantity: 0,
    },
    {
        name: "Chocolate Chips",
        price: .75,
        quantity: 0,
    },
    {
        name: "Gummy Worms",
        price: 1.00,
        quantity: 0,
    }
]

function orderVanilla() {
    let iceCreamFlavor = flavors[0]
    iceCreamFlavor.quantity += 1
    console.log(iceCreamFlavor)
}

function orderIceCreamFlavor(flavorIndex) {
    for (let i = 0; i < flavors.length; i++) {
        if (flavorIndex == flavors[i].name) {
            flavors[i].quantity += 1
            console.log(flavors[i])
        }
    }
    drawOrder()
}

function orderTopping(toppingsIndex) {
    for (let i = 0; i < toppings.length; i++) {
        if (toppingsIndex == toppings[i].name) {
            toppings[i].quantity += 1
            console.log(toppings[i])
        }
    }
    drawOrder()
}

function orderContainer(ContainersIndex) {
    for (let i = 0; i < containers.length; i++) {
        if (ContainersIndex == containers[i].name) {
            containers[i].quantity += 1
            console.log(containers[i])
        }
    }
    drawOrder()
}


function drawOrder() {
    const orderListElem = document.getElementById('order-list')
    const orderTotalElem = document.getElementById('order-total')
    let orderContent = ""
    for (let i = 0; i < flavors.length; i++) {
        let item = flavors[i]
        // console.log(`*${item.name} *${item.quantity} ${item.price * item.quantity}`)
        if (item.quantity > 0) {
            orderContent += `<p class="fw-bold text-light mb-2"><i class="mdi mdi-ice-cream"></i> ${item.name} *${item.quantity} $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    for (let i = 0; i < toppings.length; i++) {
        let item = toppings[i]
        if (item.quantity > 0) {
            orderContent += `<p class="fw-bold text-light mb-2"><i class="mdi mdi-heart"></i> ${item.name} *${item.quantity} $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    for (let i = 0; i < containers.length; i++) {
        let item = containers[i]
        if (item.quantity > 0) {
            orderContent += `<p class="fw-bold text-light mb-2"><i class="mdi mdi-cup"></i> ${item.name} *${item.quantity} $${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    //console.log(orderContent)
    orderListElem.innerHTML = orderContent
    const orderTotalFlavors = getOrderTotalFlavors()
    const orderTotalToppings = getOrderTotalToppings()
    const orderTotalContainers = getOrderTotalContainers()

    orderTotalElem.innerText = `$${(orderTotalFlavors + orderTotalToppings + orderTotalContainers).toFixed(2)}`
}


function getOrderTotalFlavors() {
    let cost = 0
    for (let i = 0; i < flavors.length; i++) {
        const item = flavors[i]
        console.log("💵", item.price * item.quantity);
        cost += item.price * item.quantity
    }
    console.log("💰", cost)
    return cost
}

function getOrderTotalToppings() {
    let cost = 0
    for (let i = 0; i < toppings.length; i++) {
        const item = toppings[i]
        cost += item.price * item.quantity
    }
    console.log("💰", cost)
    return cost
}

function getOrderTotalContainers() {
    let cost = 0
    for (let i = 0; i < containers.length; i++) {
        const item = containers[i]
        cost += item.price * item.quantity
    }
    console.log("💰", cost)
    return cost
}