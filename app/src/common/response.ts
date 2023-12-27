import { HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';

export class Response {
  ok(data: any, res: FastifyReply): void {
    res.code(HttpStatus.OK);
    res.send(data);
  }

  fail(
    error: string,
    res: FastifyReply,
    message: string,
    detailsMsg: string,
  ): void {
    res.code(HttpStatus.INTERNAL_SERVER_ERROR);
    res.send({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: message,
      details: {
        message: detailsMsg,
      },
    });
  }

  notFound(
    error: string,
    res: FastifyReply,
    message: string,
    detailsMsg: string,
  ): void {
    res.code(HttpStatus.NOT_FOUND);
    res.send({
      code: HttpStatus.NOT_FOUND,
      message: message,
      details: {
        message: detailsMsg,
      },
    });
  }

  forbidden(
    error: string,
    res: FastifyReply,
    message: string,
    detailsMsg: string,
  ): void {
    res.code(HttpStatus.FORBIDDEN);
    res.send({
      code: HttpStatus.FORBIDDEN,
      message: message,
      details: {
        message: detailsMsg,
      },
    });
  }

  badRequest(
    error: string,
    res: FastifyReply,
    message: string,
    detailsMsg: string,
  ): void {
    res.code(HttpStatus.BAD_REQUEST);
    res.send({
      code: HttpStatus.BAD_REQUEST,
      message: message,
      details: {
        message: detailsMsg,
      },
    });
  }
}
