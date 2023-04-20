const fruits = [{ Banana: "Banana" }, "Mango", "Orange"]

const newFruitsList = fruits.filter(fruit => typeof fruit === "object" ? fruit.Banana !== "Banana" : true)