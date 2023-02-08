import { useState, useEffect } from "react";
import "../App.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns = [
  { field: "userId", name: "User ID" },
  { field: "id", name: "ID" },
  { field: "title", name: "Title" },
  { field: "body", name: "Body" },
];

function Data() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handlelogout=()=>{
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div className="dd">
      <div className="b">
        <Button variant="contained" className="btn" disableElevation onClick={handlelogout}>
          Logout
        </Button>
      </div>
      <DataGrid className="data" rows={posts} columns={columns} />
    </div>
  );
}

export default Data;
