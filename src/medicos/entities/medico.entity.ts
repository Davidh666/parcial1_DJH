import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('medicos')


export class Medico {
    @PrimaryGeneratedColumn('identity')
    id: number;

    
    @Column('varchar', {length: 50})
    nombres: string;
    @Column('date')
    fecha_nacimiento: Date;

    @Column('varchar', {length: 20}) 
    celular: number;

    @Column('varchar', {length: 50})    
    especialidad: string;
    @Column('varchar', {length: 50})
    primer_apellido: string;
    @Column('varchar', {length: 50})
    segundo_apellido: string;




}

