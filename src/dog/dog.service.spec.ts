import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from './dog.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Dog } from './schemas/dog.schemas';

//--------------------------------------------------------
//Preparação para os testes
const canil = [{ _id: "5e93b9b504e75e5310a43f46", name: "lessy", age: 10, breed: "pug" }]
//---------------------------------------------------


describe('DogService', () => {
  let service: DogService;
  let model: Model<Dog>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogService,
        {
          provide: getModelToken('Dog'),
          useValue:
          {
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(canil)
            } as any)
            //um cuidado se deve tomar aqui, estamos mocando não o método do service, 
            //mas sim o métdo chamado pelo 
            //método do servico, ou seja, o métdo em cadeia do Mongoose
          }
        }],
    }).compile();

    service = module.get<DogService>(DogService);
    model = module.get<Model<Dog>>(getModelToken('Dog'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //--------------------------------------------------------
  //Começa os testes
  it('should return all dogs', async () => {
    const dogs = await service.findAll();
    expect(dogs).toEqual(canil);
  });
  //---------------------------------------------------------

});//end of DogService
