
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface CreatePostFormProps {
  onPostCreated: () => void;
}

export default function CreatePostForm({ onPostCreated }: CreatePostFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    excerpt: "",
    published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPost.title || !newPost.content) {
      toast.warning("Title and content are required");
      return;
    }
    
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('blog_posts')
        .insert([{
          title: newPost.title,
          content: newPost.content,
          excerpt: newPost.excerpt || newPost.content.substring(0, 150) + "...",
          published: newPost.published
        }]);
        
      if (error) {
        throw error;
      }
      
      toast.success("Post created successfully");
      
      setNewPost({
        title: "",
        content: "",
        excerpt: "",
        published: true,
      });
      
      onPostCreated();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error("Failed to create post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
          placeholder="Enter post title"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
          placeholder="Write your post content here..."
          rows={8}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt (optional)</Label>
        <Textarea
          id="excerpt"
          value={newPost.excerpt}
          onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
          placeholder="Brief summary of your post (optional)"
          rows={3}
        />
      </div>
      
      <Button
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Creating...' : 'Create Post'}
      </Button>
    </form>
  );
}
