
import axios from 'axios';

class LeagueofLegendsService{
    constructor() {
        this.baseURL = "https://ddragon.leagueoflegends.com/"
        this.api = axios.create({baseURL: this.baseURL});
        this.versions;
        this.availableLanguages = ['pt_BR', 'en_US']
    }

    async #getVersion(version) {
        const response = await this.api.get('api/versions.json')

        return !version ? response.data[0] : response.data.includes(version) ? version : null;
    }

    async getChampionsList(language) {
        const lastVersion = await this.#getVersion();
        const path = `cdn/${lastVersion}/data/${language}/champion.json`;
        const champs = [];

        let response = await this.api.get(path);

        response = response.data.data;

        for (let champ in response) {
            champs.push({
                name: response[champ].name, 
                id: response[champ].key,
                title: response[champ].title,
                tile: `${this.baseURL}cdn/img/champion/tiles/${response[champ].name}_0.jpg`,
                classes: response[champ].tags
            })
        }

        return champs;
    }

    // async getChampion(champName, language) {

    // }
}

const teste = new LeagueofLegendsService();

let champs = await teste.getChampionsList("pt_BR");

console.log(champs);