import { Tag } from "../entities/Tag";
import { Query, Resolver } from "type-graphql";

@Resolver(Tag)
class TagResolver {

    @Query(() => [Tag])
    async allTags() {
        return await Tag.find();
    }

    @Query(() => Tag)
    async getTagById(id: number) {
        return await Tag.findOneByOrFail({id: id})
    }
}

export default TagResolver;