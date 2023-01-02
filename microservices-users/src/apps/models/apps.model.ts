import { Field, Directive, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../../users/models/user.model';

@Entity('apps')
@ObjectType()
@Directive('@key(fields: "id")')
export class Apps {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID, { description: 'app id' })
  id: number;

  @Column()
  @Field(() => String, { description: 'app name' })
  name: string;

  @Column()
  @Field(() => String, { description: 'app name' })
  projectId: string;

  @OneToMany(() => User, (user) => user.id)
  users: User[];
}
