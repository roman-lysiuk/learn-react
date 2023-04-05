import { Character, DataCharacterApi } from 'interfaces';

export default class characterService {
  static url: string = import.meta.env.VITE_URL;
  static token: string = import.meta.env.VITE_TOKEN;

  static async getAllCharacter(limit = 1000): Promise<Character[]> {
    console.log(characterService.token);
    const response = await fetch(`${characterService.url}?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: DataCharacterApi = await response.json();
    const allCharacter = data.docs;
    return allCharacter;
  }
  static async searchCharacterForName(query: string): Promise<Character[]> {
    const response = await fetch(`${characterService.url}?name=/${query}/i`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: DataCharacterApi = await response.json();
    const allCharacter = data.docs;

    return allCharacter;
  }
  static async searchCharacterForID(id: string) {
    const response = await fetch(`${characterService.url}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: DataCharacterApi = await response.json();
    const allCharacter = data.docs[0];

    return allCharacter;
  }
}
