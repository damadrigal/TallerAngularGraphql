import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql'
import { Any } from 'typeorm';
import { Product } from '../../entities/Product'
import { ProductInput } from './productInput';
import { ProductUpdateInput } from './productUpdateInput';

@Resolver()
export class ProductResolver {

    @Mutation(() => Product)
    async createProduct(
        @Arg("variables", () => ProductInput) variables: ProductInput
    ) {
        console.log(variables);
        const newProduct = await Product.create(variables);
        return newProduct.save();
    }

    @Mutation(() => Boolean)
    async deleteProduct(
        @Arg("id", () => Int) id: number
    ) {
        await Product.delete(id);
        return true;
    }

    @Mutation(() => Boolean)
    async updateProduct(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
    ) {
        const updateProduct = await Product.update({ id }, fields);
        return updateProduct.affected;
    }

    @Query(() => [Product])
    products() {
        return Product.find();
    }

    @Query(() => [Product])
    productFilter(
        @Arg("name", () => String) name: string,
    ) {
        if (name) {
            return Product.find({ where: { name } });

        } else {
            return Product.find();
        }
    }

    @Query(() => Product)
    productById(
        @Arg("id", () => Int) id: number
    ) {
        return Product.findOne(
            { where: { id } });
    }
}