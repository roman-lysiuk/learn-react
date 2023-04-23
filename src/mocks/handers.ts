import characterService from '../API/characterService';
import { rest } from 'msw';
export const handlers = [
  rest.get(`${characterService.url}/character/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfbbe',
            height: '',
            race: 'Human',
            gender: 'Female',
            birth: '',
            spouse: 'Belemir',
            death: '',
            realm: '',
            hair: '',
            name: 'Adanel',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
          },
          {
            _id: '5cd99d4bde30eff6ebccfbbf',
            height: '',
            race: 'Human',
            gender: 'Male',
            birth: 'Before ,TA 1944',
            spouse: '',
            death: 'Late ,Third Age',
            realm: '',
            hair: '',
            name: 'Adrahil I',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adrahil_I',
          },
          {
            _id: '5cd99d4bde30eff6ebccfbc1',
            height: '2.55',
            race: 'Elf',
            gender: 'Male',
            birth: 'YT during the ,Noontide of Valinor',
            spouse: 'Loved ,Andreth but remained unmarried',
            death: 'FA 455',
            realm: 'Rohan',
            hair: 'Golden',
            name: 'Aegnor',
            wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
          },
        ],
        total: 3,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      })
    );
  }),

  rest.get(`${characterService.url}/character/5cd99d4bde30eff6ebccfbc1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfbc1',
            height: '2.55',
            race: 'Elf',
            gender: 'Male',
            birth: 'YT during the ,Noontide of Valinor',
            spouse: 'Loved ,Andreth but remained unmarried',
            death: 'FA 455',
            realm: 'Rohan',
            hair: 'Golden',
            name: 'Aegnor',
            wikiUrl: 'http://lotr.wikia.com//wiki/Aegnor',
          },
        ],
        total: 1,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      })
    );
  }),
  rest.get(`${characterService.url}/character/5cd99d4bde30eff6ebccfbbe`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfbbe',
            height: '',
            race: 'Human',
            gender: 'Female',
            birth: '',
            spouse: 'Belemir',
            death: '',
            realm: '',
            hair: '',
            name: 'Adanel',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
          },
        ],
        total: 1,
        limit: 1000,
        offset: 0,
        page: 1,
        pages: 1,
      })
    );
  }),
];
