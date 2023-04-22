import { CanActivate, ExecutionContext, Injectable, createParamDecorator } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { Observable } from 'rxjs';


   export const Me = createParamDecorator(async (data: any, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.user
   })