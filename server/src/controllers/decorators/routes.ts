import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RoutePropertyHandler extends PropertyDescriptor {
    value ?: RequestHandler
}

function routeBinder(method: string){
    return function (path: string){
        return function(target: any, key: string, desc: RoutePropertyHandler){
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);