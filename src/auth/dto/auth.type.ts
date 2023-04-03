import { Field, InputType, ObjectType } from "@nestjs/graphql"

@ObjectType()
class User {
    @Field()
    _id: string
    @Field({ nullable: true })
    email?: string
    @Field()
    name: string
}

@ObjectType()
export class AuthType {
    @Field()
    user: User
    @Field()
    token: string
}

@InputType()
export class TokenValidate {
    @Field()
    token: string
}