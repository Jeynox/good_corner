import { Ad } from "../entities/Ad";
import { Query, Resolver } from "type-graphql";

@Resolver(Ad)
class AdResolver {

    @Query(() => [Ad])
    async getAllAds() {
        return await Ad.find();
    }

    @Query(() => Ad)
    async getAdById(id: number) {
        return await Ad.findOneByOrFail({id: id});
    }
}

export default AdResolver;