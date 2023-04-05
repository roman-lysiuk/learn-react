import { Character, DataCharacterApi } from 'interfaces';

export default class characterService {
  static url = 'https://the-one-api.dev/v2/character';
  static async getAllCharacter(limit = 100): Promise<Character[]> {
    const response = await fetch(`${characterService.url}?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 31GQ6KxzLOqhWhQ3fB0s',
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
        Authorization: 'Bearer 31GQ6KxzLOqhWhQ3fB0s',
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
        Authorization: 'Bearer 31GQ6KxzLOqhWhQ3fB0s',
      },
    });
    const data: DataCharacterApi = await response.json();
    const allCharacter = data.docs[0];

    return allCharacter;
  }
}
