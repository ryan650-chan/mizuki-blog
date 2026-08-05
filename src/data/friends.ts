// 友情链接数据配置

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	// 在这里添加友链，示例：
	// {
	// 	id: 1,
	// 	title: "示例博客",
	// 	imgurl: "https://example.com/avatar.jpg",
	// 	desc: "博客描述",
	// 	siteurl: "https://example.com",
	// 	tags: ["技术"],
	// },
];

export function getShuffledFriendsList(): FriendItem[] {
	return [...friendsData].sort(() => Math.random() - 0.5);
}
