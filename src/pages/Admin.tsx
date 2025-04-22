
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Database } from "@/integrations/supabase/types";
import CreatePostForm from "@/components/admin/CreatePostForm";
import PostsList from "@/components/admin/PostsList";

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

export default function Admin() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Check if user is authenticated
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
      
      if (!data.session) {
        navigate("/");
        toast.error("You must be logged in to access the admin panel");
      } else {
        fetchPosts();
      }
    };
    
    checkSession();
    
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

  const handleDeletePost = async (id: string) => {
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
              <PostsList posts={posts} onDeletePost={handleDeletePost} />
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Create New Blog Post</h2>
              <CreatePostForm onPostCreated={fetchPosts} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
