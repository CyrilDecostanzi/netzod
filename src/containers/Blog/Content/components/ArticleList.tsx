import { ArticleRow } from "./ArticleRow";

export const ArticleList = ({ data }: { data: any[] }) => {
	return data.map((article, index) => <ArticleRow key={index} {...article} />);
};
