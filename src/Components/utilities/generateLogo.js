import { data } from "./../../database/universitiesName";
const { logos } = data;

export const generateLogo = (zipCode) => {
    const logo = logos.find(logo => logo.id === zipCode);
    return logo.img;

};
