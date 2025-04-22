
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

interface PostsListProps {
  posts: BlogPost[];
  onDeletePost: (id: string) => void;
}

export default function PostsList({ posts, onDeletePost }: PostsListProps) {
  const navigate = useNavigate();

  if (posts.length === 0) {
    return <p>No blog posts found. Create your first post!</p>;
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              {new Date(post.created_at).toLocaleDateString()} | 
              Status: {post.published ? "Published" : "Draft"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{post.excerpt || post.content.substring(0, 150) + "..."}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => navigate(`/edit-post/${post.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => onDeletePost(post.id)}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
