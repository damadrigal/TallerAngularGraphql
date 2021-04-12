import { Field, InputType, Int } from "type-graphql";

@InputType()
export class ProductUpdateInput {
    @Field( ()=> String,{nullable:true})
    name?: string;

    @Field( ()=> Int,{nullable:true})
    quantity?: number;
}