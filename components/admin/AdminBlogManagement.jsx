"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Loader2,
  UploadCloud,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileText,
  Search,
  ExternalLink,
  ToggleLeft,
  ToggleRight,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import {
  getAdminBlogs,
  createAdminBlog,
  updateAdminBlog,
  clearAdminBlogState,
} from "@/redux/slices/adminBlogSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CATEGORIES = [
  "Hair Health",
  "Skin Health",
  "Trichology",
  "Pediatrics",
  "Women's Health",
  "Metabolic Health",
  "Lifestyle",
  "General",
];

export default function AdminBlogManagement() {
  const dispatch = useDispatch();
  const { blogs, loading, error, success } = useSelector(
    (state) => state.adminBlogs
  );

  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("ALL");
  const [formError, setFormError] = useState("");
  const [notification, setNotification] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlogForDelete, setSelectedBlogForDelete] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Hair Health",
    excerpt: "",
    content: "",
    tags: "",
    isPublished: true,
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  // Initial Fetch
  useEffect(() => {
    dispatch(getAdminBlogs());
  }, [dispatch]);

  // Handle Success State
  useEffect(() => {
    if (success) {
      setNotification({
        type: "success",
        message: editingBlog
          ? "Blog updated successfully!"
          : "Blog created successfully!",
      });
      setShowForm(false);
      resetForm();
      dispatch(clearAdminBlogState());
      dispatch(getAdminBlogs());

      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }
  }, [success, dispatch, editingBlog]);

  // Handle Redux Error
  useEffect(() => {
    if (error) {
      setFormError(typeof error === "string" ? error : "An error occurred");
    }
  }, [error]);

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      category: "Hair Health",
      excerpt: "",
      content: "",
      tags: "",
      isPublished: true,
    });
    setImageFile(null);
    setImagePreview("");
    setEditingBlog(null);
    setFormError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCreateNew = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      category: blog.category || "General",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags || "",
      isPublished: Boolean(blog.isPublished),
    });
    setImageFile(null);
    setImagePreview(blog.image || "");
    setFormError("");
    setShowForm(true);
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (!editingBlog) {
      setFormData((prev) => ({
        ...prev,
        title,
        slug: generateSlug(title),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        title,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setFormError("Please select a valid image file (PNG, JPG, WebP)");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFormError("Image file size should be less than 10MB");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFormError("");
    }
  };

  const validateForm = () => {
    setFormError("");

    if (!formData.title.trim()) {
      setFormError("Blog title is required");
      return false;
    }
    if (!formData.slug.trim()) {
      setFormError("Blog slug is required");
      return false;
    }
    if (!formData.excerpt.trim()) {
      setFormError("Short description / excerpt is required");
      return false;
    }
    if (!formData.content.trim()) {
      setFormError("Blog content is required");
      return false;
    }
    if (!editingBlog && !imageFile) {
      setFormError("Featured image is required for new blogs");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    data.append("title", formData.title.trim());
    data.append("slug", formData.slug.trim());
    data.append("category", formData.category);
    data.append("excerpt", formData.excerpt.trim());
    data.append("content", formData.content);
    data.append("tags", formData.tags);
    data.append("isPublished", formData.isPublished ? "true" : "false");

    // Exact field name expected by backend: "image"
    if (imageFile) {
      data.append("image", imageFile);
    } else if (editingBlog && imagePreview) {
      data.append("image", imagePreview);
    }

    if (editingBlog) {
      const blogId = editingBlog.id || editingBlog._id;
      dispatch(updateAdminBlog({ id: blogId, formData: data }));
    } else {
      dispatch(createAdminBlog(data));
    }
  };

  const handleTogglePublish = (blog) => {
    const blogId = blog.id || blog._id;
    const data = new FormData();
    data.append("isPublished", blog.isPublished ? "false" : "true");
    if (blog.image) {
      data.append("image", blog.image);
    }
    dispatch(updateAdminBlog({ id: blogId, formData: data }));
  };

  // Filtered Blogs
  const filteredBlogs = (blogs || []).filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.slug?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "ALL" || blog.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* ================= NOTIFICATION BANNER ================= */}
      {notification && (
        <div
          className={`p-4 rounded-2xl flex items-center justify-between border ${
            notification.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            {notification.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span>{notification.message}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-xs hover:text-slate-900 text-slate-500"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* ================= HEADER SECTION ================= */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Blog Management
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
              {blogs?.length || 0} Articles
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Publish, edit, and manage public health articles and patient wellness blogs.
          </p>
        </div>

        <Button
          onClick={handleCreateNew}
          className="gap-2 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition shadow-md w-fit"
        >
          <Plus className="h-4 w-4" />
          Create New Blog
        </Button>
      </div>

      {/* ================= CREATE / EDIT FORM MODAL / VIEW ================= */}
      {showForm && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {editingBlog ? "Edit Blog Article" : "Create New Blog Article"}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {editingBlog
                  ? "Update article details, replace featured image, or modify publication status."
                  : "Draft a new clinical article. Images are automatically uploaded to secure S3 storage."}
              </p>
            </div>
            <button
              onClick={() => {
                setShowForm(false);
                resetForm();
              }}
              className="text-sm text-slate-500 hover:text-slate-900 px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>

          {formError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="blog-title" className="text-slate-700">
                  Blog Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="blog-title"
                  type="text"
                  placeholder="e.g. Understanding Hair Loss Triggers & Homeopathy"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Slug */}
              <div className="space-y-2">
                <Label htmlFor="blog-slug" className="text-slate-700">
                  URL Slug <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="blog-slug"
                  type="text"
                  placeholder="understanding-hair-loss-triggers"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, slug: generateSlug(e.target.value) }))
                  }
                  className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                  required
                />
                <p className="text-[11px] text-slate-500">
                  Public URL: <span className="text-emerald-600">/blog/{formData.slug || "slug-preview"}</span>
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="blog-category" className="text-slate-700">
                  Category
                </Label>
                <select
                  id="blog-category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-white text-slate-900">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="blog-tags" className="text-slate-700">
                  Tags / Keywords (comma separated)
                </Label>
                <Input
                  id="blog-tags"
                  type="text"
                  placeholder="hair fall, scalp health, homeopathy, wellness"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, tags: e.target.value }))
                  }
                  className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                />
              </div>

            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label htmlFor="blog-excerpt" className="text-slate-700">
                Short Description / Excerpt <span className="text-red-500">*</span>
              </Label>
              <textarea
                id="blog-excerpt"
                rows={2}
                placeholder="Brief summary displayed on the blog listing card..."
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
                }
                className="w-full rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                required
              />
            </div>

            {/* Featured Image Upload (Field Name: 'image') */}
            <div className="space-y-2">
              <Label className="text-slate-700">
                Featured Image <span className="text-red-500">*</span>
              </Label>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 rounded-2xl border border-slate-200 bg-slate-50">
                {/* Image Preview */}
                <div className="relative w-40 h-28 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Featured Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-2">
                      <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                      <span className="text-[10px] text-slate-500">No Image</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                    id="blog-image-input"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="gap-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-700"
                  >
                    <UploadCloud className="w-4 h-4" />
                    {imagePreview ? "Change Image" : "Upload Featured Image"}
                  </Button>
                  <p className="text-xs text-slate-500">
                    Supports JPG, PNG, WebP up to 10MB. Uploads directly to S3 via backend multipart field <code className="text-emerald-600 font-mono">image</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Body (HTML / Formatted Text) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="blog-content" className="text-slate-700">
                  Article Content (HTML / Text) <span className="text-red-500">*</span>
                </Label>
                <span className="text-xs text-slate-500">
                  Supports HTML tags: &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;
                </span>
              </div>
              <textarea
                id="blog-content"
                rows={10}
                placeholder="<p>Write your detailed article content here...</p>&#10;<h2>Key Takeaways</h2>&#10;<ul>&#10;  <li>Point 1</li>&#10;</ul>"
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
                className="w-full rounded-md border border-slate-200 bg-slate-50 p-4 text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 leading-relaxed"
                required
              />
            </div>

            {/* Publication Status Toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-slate-50">
              <div>
                <Label className="text-slate-700 font-medium">
                  Publication Status
                </Label>
                <p className="text-xs text-slate-500">
                  {formData.isPublished
                    ? "Published — This article is live on the website."
                    : "Draft — Only visible to admins in this dashboard."}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, isPublished: !prev.isPublished }))
                }
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                {formData.isPublished ? (
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <ToggleRight className="w-8 h-8" /> Published
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <ToggleLeft className="w-8 h-8" /> Draft
                  </span>
                )}
              </button>
            </div>

            {/* Submit / Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowForm(false);
                  resetForm();
                }}
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="gap-2 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingBlog ? "Save Changes" : "Publish Article"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* ================= SEARCH & FILTER BAR ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-xs">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search blogs by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setFilterCategory("ALL")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              filterCategory === "ALL"
                ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30"
                : "text-slate-600 hover:text-slate-900 bg-slate-100"
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                filterCategory === cat
                  ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30"
                  : "text-slate-600 hover:text-slate-900 bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= BLOG LIST TABLE ================= */}
      <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        {loading && !showForm ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-7 h-7 animate-spin text-emerald-600" />
            <p className="text-sm">Loading blog articles from backend...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center justify-center">
            <FileText className="w-12 h-12 text-slate-400 mb-3" />
            <h4 className="text-base font-semibold text-slate-900">No Blog Articles Found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              {searchQuery || filterCategory !== "ALL"
                ? "No articles match the current search or filter query."
                : "Get started by creating your first clinic blog article."}
            </p>
            <Button
              onClick={handleCreateNew}
              className="mt-5 gap-2 bg-emerald-500 text-white font-semibold hover:bg-emerald-600"
            >
              <Plus className="w-4 h-4" /> Create Blog
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-600">
              <thead className="border-b border-slate-200 text-xs uppercase tracking-widest text-slate-500 bg-slate-50">
                <tr>
                  <th className="px-4 py-3.5">Article</th>
                  <th className="px-4 py-3.5">Category</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-4 py-3.5">Date</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBlogs.map((blog) => {
                  const blogId = blog.id || blog._id;
                  const formattedDate = blog.date || blog.createdAt
                    ? new Date(blog.date || blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—";

                  return (
                    <tr key={blogId} className="hover:bg-slate-50 transition-colors">
                      {/* Thumbnail & Title */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-11 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                            {blog.image ? (
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-4 h-4 text-slate-400" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 max-w-md">
                            <h4 className="font-semibold text-slate-900 truncate text-sm">
                              {blog.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 truncate">
                              /blog/{blog.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-4 py-3.5">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {blog.category || "General"}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          title="Click to toggle status"
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border transition ${
                            blog.isPublished
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                              : "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              blog.isPublished ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                          <span>{blog.isPublished ? "Published" : "Draft"}</span>
                        </button>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3.5 text-xs text-slate-500 whitespace-nowrap">
                        {formattedDate}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5">
                          {/* View in Public Site */}
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                            title="View Public Article"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          {/* Edit */}
                          <button
                            onClick={() => handleEdit(blog)}
                            className="p-1.5 rounded-lg border border-slate-200 bg-white text-emerald-600 hover:bg-emerald-50 transition"
                            title="Edit Article"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete (Pending backend API) */}
                          <button
                            onClick={() => {
                              setSelectedBlogForDelete(blog);
                              setShowDeleteModal(true);
                            }}
                            className="p-1.5 rounded-lg border border-slate-200 bg-white text-red-500 hover:bg-red-50 transition"
                            title="Delete Article"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ================= DELETE ADVISORY MODAL ================= */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-amber-500 mb-3">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-semibold text-slate-900">Delete Action Advisory</h3>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              You selected to delete: <strong className="text-slate-900">{selectedBlogForDelete?.title}</strong>.
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs leading-relaxed">
              <strong>Backend Note:</strong> The backend router currently does not have a registered <code className="font-mono">DELETE /api/admin/blogs/:id</code> endpoint. To safely delete blogs, please add the delete controller/route to the backend. Alternatively, you can set the status to <strong>Draft</strong> to unpublish this article from the public site immediately.
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedBlogForDelete(null);
                }}
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  if (selectedBlogForDelete) {
                    handleTogglePublish({ ...selectedBlogForDelete, isPublished: true }); // toggle to draft
                  }
                  setShowDeleteModal(false);
                  setSelectedBlogForDelete(null);
                }}
                className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
              >
                Unpublish Instead
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

