export class File {
  public constructor(
    public readonly hash: string,
    public readonly name: string,
    public readonly extension: string,
    public readonly path: string,
    public readonly type: string,
    public readonly size: number,
    public readonly width: number | null,
    public readonly height: number | null,
    public readonly length: number | null,
    public readonly createdAt: Date
  ) {}
}

export default File;
