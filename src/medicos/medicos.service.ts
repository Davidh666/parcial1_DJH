import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from './entities/medico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicosService {
  constructor(@InjectRepository(Medico) private medicosRepository: Repository<Medico>) {}
  async create(CreateMedicoDto: CreateMedicoDto): Promise<Medico> {
    let medico = await this.medicosRepository.findOneBy({
      
      nombres: CreateMedicoDto.nombres,
      fecha_nacimiento: CreateMedicoDto.fecha_nacimiento,
      celular : CreateMedicoDto.celular,
      especialidad: CreateMedicoDto.especialidad
    });
    if(medico) throw new  ConflictException('el medico  ya existe')
    medico =new Medico();
    Object.assign(medico,CreateMedicoDto);
    return this.medicosRepository.save(medico)
  }

  async findAll():Promise<Medico[]> {
    return this.medicosRepository.find();
  }

  async findOne(id: number):Promise<Medico> {
    const medico = await this.medicosRepository.findOneBy({id});
    if (!medico) throw new NotFoundException('el medico no existe');
    return medico;
  }


 async update(id: number, updateMedicoDto: UpdateMedicoDto):Promise<Medico> {
    const medico =await this.findOne(id);
    Object.assign(medico,updateMedicoDto);
    return this.medicosRepository.save(medico);
  }

    async remove(id: number):Promise<Medico> {
     const Medico =await this.findOne(id);
     return this.medicosRepository.softRemove(Medico);
  }
}
