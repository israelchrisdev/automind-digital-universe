
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Admin() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    excerpt: "",
    published: true,
  });

  // Check if user is authenticated
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
      
      // If not authenticated, redirect to home
      if (!data.session) {
        navigate("/");
        toast.error("You must be logged in to access the admin panel");
      } else {
        // Fetch posts if authenticated
        fetchPosts();
      }
    };
    
    checkSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
        if (!session) {
          navigate("/");
        }
      }
    );
    
    return () => subscription.unsubscribe();
  }, [navigate]);

  // Fetch all blog posts
  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        throw error;
      }
      
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error("Failed to load blog posts");
    }
  };

  // Handle creating a new post
  const handleCreatePost = async (e) => {
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
      
      // Reset form and reload posts
      setNewPost({
        title: "",
        content: "",
        excerpt: "",
        published: true,
      });
      
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error("Failed to create post");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle deleting a post
  const handleDeletePost = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
        
      if (error) {
        throw error;
      }
      
      toast.success("Post deleted successfully");
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error("Failed to delete post");
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          Loading admin panel...
        </div>
      </Layout>
    );
  }

  // Render admin dashboard
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="create">Create New Post</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
              
              {posts.length > 0 ? (
                <div className="grid gap-4">
                  {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
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
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <p>No blog posts found. Create your first post!</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Create New Blog Post</h2>
              
              <form onSubmit={handleCreatePost} className="space-y-4">
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
