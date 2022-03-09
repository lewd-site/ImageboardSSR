import File from './file';
import { Node } from './markup';

export class Thread {
  public constructor(
    public readonly id: number,
    public readonly slug: string,
    public readonly subject: string | null,
    public readonly name: string | null,
    public readonly tripcode: string | null,
    public readonly message: string | null,
    public readonly parsedMessage: Node[],
    public readonly files: File[],
    public readonly createdAt: Date,
    public readonly bumpedAt: Date,
    public readonly postCount: number
  ) {}
}

export default Thread;
