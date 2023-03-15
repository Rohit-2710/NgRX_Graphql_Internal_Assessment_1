import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core'
import {HttpLink} from 'apollo-angular/http'

const uri='http://localhost:4000/graphql';
export function createApollo(httpLink:HttpLink):ApolloClientOptions<any>{
  return{
    link:httpLink.create({uri}),
    cache:new InMemoryCache(),
  };
}

@NgModule({
  exports:[ApolloModule],
  providers:[
    {provide:APOLLO_OPTIONS,
    useFactory:createApollo,
    deps:[HttpLink]}
  ],
  imports: [
    CommonModule
  ]
})
export class GraphqlModule { }
