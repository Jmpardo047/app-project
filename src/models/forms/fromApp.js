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
            calidad: config?.calidad ?? null,
            tipo: config?.tipo ?? null,
            diseño: config?.tipoAppDesk ?? null,
            beneficio: config?.beneficio ?? null,
            login: config?.login ?? null,
            integracion: config?.integracion ?? null,
            perfiles: config?.perfiles ?? null,
            adminPanel: config?.panelAdmin ?? null,
            idioma: config?.idioma ?? null,
            estado: config?.estado ?? null
        };
    }
}