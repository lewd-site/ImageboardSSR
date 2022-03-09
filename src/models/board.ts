export class Board {
  public constructor(
    public readonly slug: string,
    public readonly title: string,
    public readonly createdAt: Date,
    public readonly postCount: number
  ) {}
}

export default Board;
