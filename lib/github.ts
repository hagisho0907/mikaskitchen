// GitHub API ユーティリティ関数

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = process.env.GITHUB_OWNER || 'hagisho0907';
const REPO_NAME = process.env.GITHUB_REPO || 'mikaskitchen';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface GitHubFile {
  content: string;
  sha?: string;
}

// ファイルを取得
export async function getGitHubFile(path: string): Promise<any> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'User-Agent': 'MikasKitchen-App',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }

    const data = await response.json();
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    return { content: JSON.parse(content), sha: data.sha };
  } catch (error) {
    console.error('GitHub file fetch error:', error);
    return null;
  }
}

// ファイルを更新
export async function updateGitHubFile(
  path: string,
  content: any,
  sha?: string
): Promise<boolean> {
  try {
    const encodedContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
    
    const body: any = {
      message: `Update ${path} data 🤖`,
      content: encodedContent,
    };

    if (sha) {
      body.sha = sha;
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          'User-Agent': 'MikasKitchen-App',
        },
        body: JSON.stringify(body),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('GitHub file update error:', error);
    return false;
  }
}

// イベントデータを取得
export async function getEvents() {
  const result = await getGitHubFile('data/events.json');
  return result?.content || [];
}

// イベントデータを保存
export async function saveEvents(events: any[]) {
  const currentFile = await getGitHubFile('data/events.json');
  return await updateGitHubFile('data/events.json', events, currentFile?.sha);
}

// お知らせデータを取得
export async function getNews() {
  const result = await getGitHubFile('data/news.json');
  return result?.content || [];
}

// お知らせデータを保存
export async function saveNews(news: any[]) {
  const currentFile = await getGitHubFile('data/news.json');
  return await updateGitHubFile('data/news.json', news, currentFile?.sha);
}