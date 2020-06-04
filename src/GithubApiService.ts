import * as request from 'request';
import { User, Repo } from './User';

const options = {
    headers: {
      'User-Agent': 'request'
    },
    json: true
  };

export class GithubApiService {
    getUserInfo(userName: string, callback: (user: User) => any) {
        request.get("https://api.github.com/users/" + userName, options, (error: any, response: any, body: any) => {
            // console.log(typeof body); // string
            // let user: User = new User(JSON.parse(body)); 
            let user: User = new User(body);
            callback(user);
        })
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {
      request.get("https://api.github.com/users/" + userName + "/repos", options, (error: any, response: any, body: any) => {
          // console.log(typeof body); // string
          // let user: User = new User(JSON.parse(body)); 
          let repos: Repo[] = body.map((repo: any) => new Repo(repo));
          callback(repos);
      })
  }
}