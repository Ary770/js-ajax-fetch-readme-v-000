const token = '5a659e8c04919c29c9abe3ea776ec450ba8be05f'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
