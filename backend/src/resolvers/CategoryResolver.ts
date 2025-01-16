import { Category } from "../entities/Category";
import { Query, Resolver } from "type-graphql";

@Resolver(Category)
class CategoryResolver {

    @Query(() => [Category])
    async allCategories() {
        return await Category.find();
    }

    @Query(() => Category)
    async getCategoryById(id: number) {
        return await Category.findOneByOrFail({id: id});
    }
}

export default CategoryResolver;