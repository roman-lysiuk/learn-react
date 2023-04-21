import { Character, ResponseServer } from 'interfaces';

export default class characterService {
  // static url: string = import.meta.env.VITE_URL;
  // static token: string = import.meta.env.VITE_TOKEN;

  static url: string = ' https://the-one-api.dev/v2';
  static token: string = '31GQ6KxzLOqhWhQ3fB0s';

  static async getAllCharacter(limit = 1000): Promise<Character[]> {
    const response = await fetch(`${characterService.url}/character/?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: ResponseServer<Character> = await response.json();
    const allCharacter = data.docs;
    return allCharacter;
  }
  static async searchCharacterForName(query: string): Promise<Character[]> {
    const response = await fetch(`${characterService.url}/character/?name=/${query}/i`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: ResponseServer<Character> = await response.json();
    const allCharacter = data.docs;

    return allCharacter;
  }
  static async searchCharacterForID(id: string) {
    const response = await fetch(`${characterService.url}/character/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${characterService.token}`,
      },
    });
    const data: ResponseServer<Character> = await response.json();
    const allCharacter = data.docs[0];

    return allCharacter;
  }
}
