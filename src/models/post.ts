import File from './file';
import { Node } from './markup';

export class Post {
  public constructor(
    public readonly id: number,
    public readonly slug: string,
    public readonly parentId: number,
    public readonly name: string | null,
    public readonly tripcode: string | null,
    public readonly message: string | null,
    public readonly parsedMessage: Node[],
    public readonly files: File[],
    public readonly createdAt: Date
  ) {}
}

export default Post;
