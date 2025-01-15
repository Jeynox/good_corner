import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,

} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Picture } from "./Picture";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  createdAt: Date;

  // relations
  @Field(() => [Picture])
  @OneToMany(() => Picture, (picture) => picture.ad, {
    cascade: true,
    eager: true,
    onDelete: "CASCADE",
  })
  pictures: Picture[];

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.ads, { eager: true })
  category: string;

  @Field(() => [Tag])
  @ManyToMany(() => Tag, (tag) => tag.ads, { eager: true })
  @JoinTable()
  tags: Tag[];
}