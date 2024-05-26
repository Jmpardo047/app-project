export class plantillaData {

    constructor({ id, first_name, last_name, email, country, city, phone_number, cost, config = {} }) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.country = country;
        this.city = city;
        this.cost = cost ?? null;
        this.config = {
            calidad: localStorage.getItem('op0'),
            tipo: localStorage.getItem('op1'),
            diseño: localStorage.getItem('op2'),
            beneficio: localStorage.getItem('op3'),
            login: localStorage.getItem('op4'),
            integracion: localStorage.getItem('op5'),
            perfiles: localStorage.getItem('op6'),
            adminPanel: localStorage.getItem('op7'),
            idioma: localStorage.getItem('op8'),
            estado: localStorage.getItem('op9'),
        };
    }
}