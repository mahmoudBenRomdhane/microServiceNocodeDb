import { Field, Directive, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';

@Entity('userNoCode')
@ObjectType()
@Directive('@key(fields: "id")')
export class NoCodeUser {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'id of the user' })
  id: number;

  @Column()
  @Field(() => String, { description: 'email' })
  email: string;

  @Column()
  @Field(() => String, { description: 'password' })
  password: string;


}
