import axios, { AxiosResponse } from 'axios';
import { environment } from '../environments/environment';
import { Post } from '../components/posts/post';

export default class PostsService {

  static async getAllPosts(): Promise<Post[]> {
    const response: AxiosResponse = await axios.get<Post[]>(`${environment.serverUrl}/posts`);
    return response.data;
  }

  static async getPostById(id: string): Promise<Post> {
    const response = await axios.get(`${environment.serverUrl}/posts/${id}`);
    return response.data;
  }

  static async createPost(post: Post): Promise<Post>  {
    const response: AxiosResponse = await axios.post<AxiosResponse>(`${environment.serverUrl}/posts`, post);
    return response.data;
  }

  static async deletePost(id: string): Promise<Post> {
    const response: AxiosResponse = await axios.delete<AxiosResponse>(`${environment.serverUrl}/posts/${id}`);
    return response.data;
  }

  static fetchImage(post: Post): string {
    return `${environment.serverUrl}/${post.picture}`;
  }

  static async fetchTestPosts(): Promise<Post[]> {
    const response: AxiosResponse = await axios.get<Post[]>(`${environment.serverUrl}/test`);
    return response.data;
  }
}