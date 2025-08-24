import projectsData from "../content/projects/projects.json";
import type { Project } from "../types/project";

/**
 * プロジェクトデータを取得
 * @returns プロジェクトの配列
 */
export function getProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * プロジェクトを更新日順（新しい順）でソート
 * 更新日がない場合は作成日を使用
 * @param projects プロジェクトの配列
 * @returns ソートされたプロジェクトの配列
 */
export function sortProjectsByDate(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    // ソートに使用する日付を決定（更新日 > 作成日の優先順位）
    const dateA = a.updatedDate || a.createdDate;
    const dateB = b.updatedDate || b.createdDate;

    // 日付がない場合は最後に表示
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;

    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });
}

/**
 * すべてのタグとその使用回数を取得
 * @param projects プロジェクトの配列
 * @returns タグと使用回数のマップ
 */
export function getProjectTagCounts(projects: Project[]): Map<string, number> {
  const tagCounts = new Map<string, number>();

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return tagCounts;
}
