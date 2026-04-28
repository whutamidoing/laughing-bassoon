interface Post {
  id: number;
  userId: string;
  title: string;
  subject: string;
  content: string;
  tags: string[];
  createdAt: Date;
  status: "published" | "draft" | "archived";
}
