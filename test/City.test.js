const City = require("../models/City")

test("Create a City Object", () => {
    let city = new City()
    expect(city).toBeInstanceOf(City)
})

test("test City Factory Function with No Arguments", () => {
    let city = City.Create()
    expect(city).toBeInstanceOf(City)
})

test("test City Factory Function with With Arguments", () => {
    let city = City.Create({city: "Abbottabad"})
    expect(city.city).toBe("Abbottabad");
    expect(city.city_ascii).toBeFalsy();
})