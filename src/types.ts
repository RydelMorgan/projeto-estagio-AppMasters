
export type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_descripition: string;
    game_url: string;
    genre: string;
    plataform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export class TimeoutError extends Error {
    constructor(message?: string) {
      super(message);
      this.name = 'TimeoutError';
    }
  }

export class ServerError extends Error {
    constructor(message?: string) {
      super(message);
      this.name = 'ServerError';
    }
  }