export class RepositoryError extends Error {
  constructor(message = 'An error has ocurred retrieving data') {
    super(message);
  }
}
