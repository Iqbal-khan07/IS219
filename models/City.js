class City {
    constructor(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        this.id = id;
        this.city = city;
        this.city_ascii = city_ascii;
        this.country = country;
        this.population = population;
        this.lat = lat;
        this.lng = lng;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.capital = capital;
        this.admin_name = admin_name;
    }

    static Create(record){
        const parameters = (record != null && record != undefined) ? Object.values(record) : [];
        return new City(...parameters);
    }
}

module.exports = City;