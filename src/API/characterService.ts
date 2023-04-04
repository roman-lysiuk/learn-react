import { Character, DataCharacterApi } from 'interfaces';

export default class characterService {
  static url = 'https://the-one-api.dev/v2/character';
  static async getAllCharacter(): Promise<Character[]> {
    const response = await fetch(characterService.url, {
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
    console.log(allCharacter);

    return allCharacter;
  }
}
