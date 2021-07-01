import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DogDocument, Dog } from "./schemas/dog.schemas"


//--------------------------------------------------------
//Preparação para os testes
const canil = [{ _id: "5e93b9b504e75e5310a43f46", name: "lessy", age: 10, breed: "pug" }]
//---------------------------------------------------


@Injectable()
export class DogService {

  constructor(
    @InjectModel(Dog.name) private readonly catModel: Model<DogDocument>,
  ) { }



  //métodos 
  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  //Testando....
  async findAll(): Promise<Dog[]> {
    //const dogs = await this.catModel.find().exec();
    //console.log(dogs);
    return this.catModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
