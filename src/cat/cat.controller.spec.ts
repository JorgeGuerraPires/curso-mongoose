import { Test, TestingModule } from '@nestjs/testing';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

import { CreateCatDto } from "./dto/create-cat.dto"
import { objectid } from "objectid"

describe('CatController', () => {
  let controller: CatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService]
      // {
      //   provide: CatService,//this is necessary to override during the test the methods from the service
      //   useValue: {
      //     create: jest.fn().mockImplementation((cat: CreateCatDto) =>
      //       Promise.resolve({ _id: '5e98af31746ba33884b9ad70', ...cat })
      //     ),
      //   }
      // }
      // ],
    }).compile();

    controller = module.get<CatController>(CatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //----------------------------------------------------------
  describe('Create a brand new', () => {

    //---------------------------------------
    it('should create a new cat', () => {
      const newCatDTO: CreateCatDto = {
        name: 'New Cat 1',
        breed: 'New Breed 1',
        age: 4,
      };

      expect(controller.create(newCatDTO)).resolves.toEqual({
        _id: '5e98af31746ba33884b9ad70',
        ...newCatDTO,
      });

    });
    //----------------------------------------   

  })
});
