export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[] = [];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}

export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forks_count: number;

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forks_count = repo.forks;
    }
}