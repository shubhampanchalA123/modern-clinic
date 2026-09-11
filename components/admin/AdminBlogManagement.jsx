"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Plus,
  Trash2,
  Edit,
  Loader2,
  Eye,
  CheckCircle,
  XCircle,
  Upload,
  Image as ImageIcon,
  Search,
  ExternalLink,
  Tag,
  FileText,
} from "lucide-react";
import {
  getAdminBlogs,
  createAdminBlog,
  updateAdminBlog,
  deleteAdminBlog,
  clearAdminBlogState,
} from "@/redux/slices/adminBlogSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CATEGORIES = [
  "Hair Health",
  "Scalp Care",
  "Skin Health",
  "Chronic Conditions",
  "Mental Wellness",
  "Immunity",
  "Lifestyle",
  "General",
];

const slugify = (text = "") =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default function AdminBlogManagement() {
  const dispatch = useDispatch();
  const { blogs, loading, error, success } = useSelector(
    (state) => state.adminBlogs
  );

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
  const [formError, setFormError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(getAdminBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      handleCloseForm();
      dispatch(clearAdminBlogState());
      dispatch(getAdminBlogs());
    }
  }, [success, dispatch]);

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingId(null);
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
    setFormError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "title" && !editingId) {
      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: slugify(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
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
      if (file.size > 5 * 1024 * 1024) {
        setFormError("Image size must be under 5MB");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFormError("");
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id || blog._id);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      category: blog.category || "Hair Health",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags || "",
      isPublished: blog.isPublished ?? true,
    });
    setImagePreview(blog.image || "");
    setImageFile(null);
    setShowForm(true);
    setFormError("");
  };

  const handleTogglePublish = async (blog) => {
    const blogId = blog.id || blog._id;
    const updateData = new FormData();
    updateData.append("isPublished", !blog.isPublished);

    try {
      await dispatch(updateAdminBlog({ id: blogId, formData: updateData })).unwrap();
      dispatch(getAdminBlogs());
    } catch (err) {
      console.error("Failed to toggle publish state:", err);
    }
  };

  const validateForm = () => {
    setFormError("");
    if (!formData.title.trim()) {
      setFormError("Title is required");
      return false;
    }
    if (!formData.excerpt.trim()) {
      setFormError("Excerpt / short summary is required");
      return false;
    }
    if (!formData.content.trim()) {
      setFormError("Blog content is required");
      return false;
    }
    if (!editingId && !imageFile && !imagePreview) {
      setFormError("Blog cover image is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    data.append("title", formData.title.trim());
    data.append("slug", formData.slug.trim() || slugify(formData.title));
    data.append("category", formData.category);
    data.append("excerpt", formData.excerpt.trim());
    data.append("content", formData.content);
    data.append("tags", formData.tags);
    data.append("isPublished", formData.isPublished);

    if (imageFile) {
      data.append("image", imageFile);
    } else if (imagePreview && !imageFile) {
      data.append("image", imagePreview);
    }

    try {
      if (editingId) {
        await dispatch(updateAdminBlog({ id: editingId, formData: data })).unwrap();
      } else {
        await dispatch(createAdminBlog(data)).unwrap();
      }
    } catch (err) {
      setFormError(typeof err === "string" ? err : "Failed to save blog");
    }
  };

  const confirmDelete = async () => {
    if (!blogToDelete) return;
    const blogId = blogToDelete.id || blogToDelete._id;
    setDeletingId(blogId);
    try {
      await dispatch(deleteAdminBlog(blogId)).unwrap();
      setShowDeleteModal(false);
      setBlogToDelete(null);
      dispatch(getAdminBlogs());
    } catch (err) {
      setFormError(typeof err === "string" ? err : "Failed to delete blog");
    } finally {
      setDeletingId(null);
    }
  };

  // Filter blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.slug?.toLowerCase().includes(searchQuery.toLowerCase());

    if (statusFilter === "published") return matchesSearch && b.isPublished;
    if (statusFilter === "draft") return matchesSearch && !b.isPublished;
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/10 bg-white/5 p-5">
        <div>
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            Blog Management
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Create, edit, publish, and manage all clinic health articles and medical blogs.
          </p>
        </div>

        <Button
          onClick={() => {
            handleCloseForm();
            setShowForm(true);
          }}
          className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold w-fit"
        >
          <Plus className="h-4 w-4" />
          Create Blog
        </Button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title, category, slug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {["all", "published", "draft"].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition ${
                statusFilter === tab
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab} ({
                tab === "all"
                  ? blogs.length
                  : tab === "published"
                  ? blogs.filter((b) => b.isPublished).length
                  : blogs.filter((b) => !b.isPublished).length
              })
            </button>
          ))}
        </div>
      </div>

      {/* Create / Edit Form Modal */}
      {showForm && (
        <div className="rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              {editingId ? <Edit className="w-5 h-5 text-emerald-400" /> : <Plus className="w-5 h-5 text-emerald-400" />}
              {editingId ? "Edit Blog Article" : "Create New Blog Article"}
            </h3>
            <button
              onClick={handleCloseForm}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md hover:bg-white/5"
            >
              Cancel
            </button>
          </div>

          {formError && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-xs text-slate-300">Article Title *</Label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., How Hair Fall Really Starts & Homeopathic Care"
                  className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500 text-sm"
                  required
                />
              </div>

              {/* Slug */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300">URL Slug (auto-generated)</Label>
                <Input
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="e.g., how-hair-fall-starts"
                  className="bg-slate-950 border-white/10 text-slate-300 placeholder:text-slate-500 text-sm"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300">Category *</Label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md bg-slate-950 border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cover Image Upload */}
              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-xs text-slate-300">Cover Image (AWS S3 Upload) *</Label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl border border-dashed border-white/15 bg-slate-950/60">
                  {imagePreview ? (
                    <div className="relative w-32 h-20 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex-shrink-0">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-20 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 text-slate-500">
                      <ImageIcon className="w-8 h-8 opacity-40" />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                      id="blog-image-input"
                    />
                    <label
                      htmlFor="blog-image-input"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium cursor-pointer hover:bg-white/15 transition"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {imagePreview ? "Change Image" : "Upload Image"}
                    </label>
                    <p className="text-[11px] text-slate-400">
                      PNG, JPG, WebP up to 5MB. Uploaded securely to AWS S3.
                    </p>
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-xs text-slate-300">Excerpt / Short Description *</Label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Brief 1-2 sentence preview that appears on blog cards..."
                  className="w-full p-3 rounded-md bg-slate-950 border border-white/10 text-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  required
                />
              </div>

              {/* Content (HTML/Rich Body) */}
              <div className="space-y-1.5 md:col-span-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-slate-300">Full Blog Content (HTML supported) *</Label>
                  <span className="text-[11px] text-slate-400">
                    Supports &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, etc.
                  </span>
                </div>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={10}
                  placeholder="<p>Write or paste your article content here...</p>&#10;<h2>Why Does This Happen?</h2>&#10;<ul>&#10;  <li>Root cause 1</li>&#10;  <li>Root cause 2</li>&#10;</ul>"
                  className="w-full p-3 font-mono rounded-md bg-slate-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-400 leading-relaxed"
                  required
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-xs text-slate-300">Tags (comma separated)</Label>
                <Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="hairfall, homeopathy, scalp care, regrowth"
                  className="bg-slate-950 border-white/10 text-white placeholder:text-slate-500 text-sm"
                />
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-3 md:col-span-2 pt-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-white/20 bg-slate-950 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
                />
                <Label htmlFor="isPublished" className="text-xs text-slate-300 cursor-pointer">
                  Publish immediately (Uncheck to save as draft)
                </Label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseForm}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs"
              >
                {loading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                {editingId ? "Update Article" : "Publish Article"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Blogs List Table */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">
              Total Articles ({filteredBlogs.length})
            </p>
            <p className="text-xs text-slate-400">
              Live from MongoDB database and AWS S3
            </p>
          </div>
        </div>

        {loading && blogs.length === 0 ? (
          <div className="py-12 text-center text-slate-400 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
            <p className="text-xs">Loading blog articles...</p>
          </div>
        ) : error ? (
          <div className="py-8 text-center text-red-300 text-xs">
            {error}
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-12 text-center text-slate-400 space-y-2">
            <FileText className="w-8 h-8 opacity-30 mx-auto" />
            <p className="text-sm font-medium text-slate-300">No blog articles found</p>
            <p className="text-xs text-slate-500">
              {searchQuery
                ? "No articles match your search filter."
                : "Get started by creating your first clinic blog post."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs text-slate-300">
              <thead className="border-b border-white/10 uppercase tracking-wider text-slate-400 text-[11px]">
                <tr>
                  <th className="px-3 py-3">Article</th>
                  <th className="px-3 py-3">Category</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id || blog._id} className="hover:bg-white/[0.02] transition">
                    {/* Article Thumbnail & Title */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-10 rounded-lg overflow-hidden bg-slate-900 border border-white/10 flex-shrink-0">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-600">
                              <ImageIcon className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="max-w-xs sm:max-w-md">
                          <p className="font-medium text-white truncate">{blog.title}</p>
                          <p className="text-[11px] text-slate-400 truncate">/blog/{blog.slug}</p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-3 py-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-[11px] font-medium">
                        {blog.category || "General"}
                      </span>
                    </td>

                    {/* Status Badge & Toggle */}
                    <td className="px-3 py-3">
                      <button
                        onClick={() => handleTogglePublish(blog)}
                        title="Click to toggle publish status"
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition ${
                          blog.isPublished
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25"
                            : "bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25"
                        }`}
                      >
                        {blog.isPublished ? (
                          <>
                            <CheckCircle className="w-3 h-3" /> Published
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" /> Draft
                          </>
                        )}
                      </button>
                    </td>

                    {/* Date */}
                    <td className="px-3 py-3 text-slate-400 whitespace-nowrap text-[11px]">
                      {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>

                    {/* Actions */}
                    <td className="px-3 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        {blog.isPublished && (
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition"
                            title="View Public Blog"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <button
                          onClick={() => handleEdit(blog)}
                          className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition"
                          title="Edit Article"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            setBlogToDelete(blog);
                            setShowDeleteModal(true);
                          }}
                          className="p-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && blogToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-red-400" />
              Delete Blog Article
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Are you sure you want to delete <strong className="text-white">"{blogToDelete.title}"</strong>?
              This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDeleteModal(false);
                  setBlogToDelete(null);
                }}
                className="text-xs"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmDelete}
                disabled={deletingId === (blogToDelete.id || blogToDelete._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold gap-2"
              >
                {deletingId && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Delete Forever
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
