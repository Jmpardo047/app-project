export class plantillaData {

    constructor({ id, firstName, lastName, email, country, city, phoneNumber, cost, config = {} }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
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