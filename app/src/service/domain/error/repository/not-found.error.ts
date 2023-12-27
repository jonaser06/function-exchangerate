import { RepositoryError } from './repository.error';

export class NotFoundError extends RepositoryError {
  constructor(message = 'Not found') {
    super(message);
  }
}
