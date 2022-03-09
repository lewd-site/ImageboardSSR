import Board from '../models/board';
import File from '../models/file';
import { Node } from '../models/markup';
import Post from '../models/post';
import Thread from '../models/thread';

export interface ListResponse<T> {
  readonly items: T[];
}

export interface ItemResponse<T> {
  readonly item: T;
}

export interface ErrorResponse {
  readonly status: number;
  readonly field?: string;
  readonly message: string;
}

export interface BoardDto {
  readonly slug: string;
  readonly title: string;
  readonly created_at: string;
  readonly post_count: number;
}

export interface ThreadDto {
  readonly id: number;
  readonly slug: string;
  readonly subject: string | null;
  readonly name: string | null;
  readonly tripcode: string | null;
  readonly message: string;
  readonly message_parsed: Node[];
  readonly files: FileDto[];
  readonly created_at: string;
  readonly bumped_at: string;
  readonly post_count: number;
}

export interface PostDto {
  readonly id: number;
  readonly slug: string;
  readonly parent_id: number;
  readonly name: string | null;
  readonly tripcode: string | null;
  readonly message: string;
  readonly message_parsed: Node[];
  readonly files: FileDto[];
  readonly created_at: string;
}

export interface FileDto {
  readonly hash: string;
  readonly name: string;
  readonly extension: string;
  readonly path: string;
  readonly type: string;
  readonly size: number;
  readonly width: number | null;
  readonly height: number | null;
  readonly length: number | null;
  readonly created_at: string;
}

export function convertBoardDtoToModel(board: BoardDto): Board {
  return new Board(board.slug, board.title, new Date(board.created_at), +board.post_count);
}

export function convertThreadDtoToModel(thread: ThreadDto): Thread {
  return new Thread(
    +thread.id,
    thread.slug,
    thread.subject,
    thread.name,
    thread.tripcode,
    thread.message,
    thread.message_parsed,
    thread.files.map(convertFileDtoToModel),
    new Date(thread.created_at),
    new Date(thread.bumped_at),
    +thread.post_count
  );
}

export function convertPostDtoToModel(post: PostDto): Post {
  return new Post(
    +post.id,
    post.slug,
    +post.parent_id,
    post.name,
    post.tripcode,
    post.message,
    post.message_parsed,
    post.files.map(convertFileDtoToModel),
    new Date(post.created_at)
  );
}

export function convertFileDtoToModel(file: FileDto): File {
  return new File(
    file.hash,
    file.name,
    file.extension,
    file.path,
    file.type,
    +file.size,
    file.width ? +file.width : null,
    file.height ? +file.height : null,
    file.length ? +file.length : null,
    new Date(file.created_at)
  );
}
