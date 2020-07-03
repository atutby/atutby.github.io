async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // GitHub требует заголовок user-agent
    });

    const body = await response.json(); // (2) ответ в формате JSON (массив коммитов)

    // (3) Ссылка на следующую страницу находится в заголовках, извлекаем её
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for(let commit of body) { // (4) вернуть коммиты один за другим, до окончания страницы
      yield commit;
    }
  }
}

const go2 = (async () => {

  let count = 0;

  for await (const commit of fetchCommits('atutby/atutby.github.io')) {

    console.log(commit.commit.message);

    if (++count == 100) { // остановимся на 100 коммитах
      break;
    }
  }

});