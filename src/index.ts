import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User, Repo } from './User';

let svc: GithubApiService = new GithubApiService();

// console.log(process.argv[2]);
if (process.argv.length < 3){
    console.log("必须传入用户名");
} else {
    svc.getUserInfo(process.argv[2], (user: User) => {
        // console.log(user);
        // console.log("name:", user.login);
        svc.getRepos(process.argv[2],(repos: Repo[]) => {
            // console.log(repos);
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forks_count * -1])
            user.repos = sortedRepos;
            console.log(user);
        })
    });
}



