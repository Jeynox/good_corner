import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ad } from "./Ad";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    name: string;
    
    @ManyToMany(() => Ad, ad => ad.tags)
    ads: Ad[];
}
