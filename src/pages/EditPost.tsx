
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<BlogPost>({
    id: '',
    title: "",
    content: "",
    excerpt: "",
    published: true,
    created_at: '',
    updated_at: '',
  });

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();
          
        if (error) {
          throw error;
        }
        
        if (data) {
          setPost(data);
        } else {
          toast.error("Post not found");
          navigate("/admin");
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        toast.error("Failed to load post");
        navigate("/admin");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [id, navigate]);

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!post.title || !post.content) {
      toast.warning("Title and content are required");
      return;
    }
    
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('blog_posts')
        .update({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt || post.content.substring(0, 150) + "...",
          published: post.published
        })
        .eq('id', id);
        
      if (error) {
        throw error;
      }
      
      toast.success("Post updated successfully");
      navigate("/admin");
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error("Failed to update post");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          Loading post...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Edit Post</h1>
          <Button variant="outline" onClick={() => navigate("/admin")}>
            Back to Admin
          </Button>
        </div>
        
        <form onSubmit={handleUpdatePost} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={post.title}
              onChange={(e) => setPost({...post, title: e.target.value})}
              placeholder="Enter post title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={post.content}
              onChange={(e) => setPost({...post, content: e.target.value})}
              placeholder="Write your post content here..."
              rows={12}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt (optional)</Label>
            <Textarea
              id="excerpt"
              value={post.excerpt || ''}
              onChange={(e) => setPost({...post, excerpt: e.target.value})}
              placeholder="Brief summary of your post (optional)"
              rows={3}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              checked={post.published}
              onCheckedChange={(checked) => setPost({...post, published: checked})}
              id="published"
            />
            <Label htmlFor="published">Published</Label>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
