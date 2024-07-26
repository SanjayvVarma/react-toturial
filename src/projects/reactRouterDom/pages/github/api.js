const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/SanjayvVarma')
    return res.json();
}

export default githubInfoLoader;