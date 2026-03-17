import axios from 'axios';
import { stripHtml } from '../../utils/formatters.js';

class LeagueofLegendsService{
    constructor() {
        this.baseURL = "https://ddragon.leagueoflegends.com/"
        this.api = axios.create({baseURL: this.baseURL});
        this.currentVersion = null;
        this.availableLanguages = ['pt_BR', 'en_US']
    }

    async #getVersion() {
        if (this.currentVersion) return this.currentVersion;

        try {
            const response = await this.api.get('api/versions.json')

            this.currentVersion = response.data[0];

            return this.currentVersion;
        } catch(error) {
            throw new Error("Erro ao buscar versão: ", {cause: error});
        }
    }

    async getChampionsList(language) {
        const lastVersion = await this.#getVersion();
        const path = `cdn/${lastVersion}/data/${language}/champion.json`;
        const champs = [];

        try {
            let response = await this.api.get(path);

            response = response.data.data

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
        } catch(error) {
            throw new Error("Erro ao buscar lista de campeões: ", {cause: error});
        }
    }

    async getChampion(champName, language) {
        const lastVersion = await this.#getVersion();
        champName = champName.replace(" ", "");
        champName = champName.charAt(0).toUpperCase() + champName.substring(1);
        const path = `cdn/${lastVersion}/data/${language}/champion/${champName}.json`;

        try {
            let response = await this.api.get(path);

            response = response.data.data[champName];

            let formatedId = response.key.toString().padStart(4, "0");

            const spells = ['Q', 'W', "E", "R"];

            console.log(response.skins)
            

            return {
                name: response.name,
                id: response.key,
                title: response.title,
                skins: response.skins.map(skin => {return {name: skin.name, img: `${this.baseURL}cdn/img/champion/splash/${champName}_${skin.num}.jpg`, id: skin.num}}),
                lore: response.lore,
                allytips: response.allytips,
                enemytips: response.enemytips,
                classes: response.tags,
                habilities: [{
                    key: "P",
                    name: response.passive.name,
                    description: stripHtml(response.passive.description),
                    icon: `${this.baseURL}cdn/${lastVersion}/img/passive/${response.passive.image.full}`,
                    video: `https://lol.dyn.riotcdn.net/x/videos/champion-abilities/${formatedId}/ability_${formatedId}_P1.mp4`
                }, ...response.spells.map((spell, index) => {
                    return {
                        key: spells[index],
                        name: spell.name,
                        description: stripHtml(spell.description),
                        icon: `${this.baseURL}cdn/${lastVersion}/img/spell/${spell.image.full}`,
                        video: `https://lol.dyn.riotcdn.net/x/videos/champion-abilities/${formatedId}/ability_${formatedId}_${spells[index]}1.mp4`
                    }
                })]
            };
        } catch(error) {
            throw new Error("Erro ao buscar campeão: ", {cause: error});
        }
    }
}

export const LoLService = new LeagueofLegendsService();