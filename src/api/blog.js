import request from '@/utils/request'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

const getBlogs = ({ page = 1, userId, atIndex }) => {
  return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
}

const getIndexBlogs = ({ page } = {page: 1}) => {
  return getBlogs({ page, atIndex: true })
}

const getBlogsByUserId = (userId, { page = 1, atIndex }) => {
  return getBlogs({ userId, page, atIndex })
}

const getDetail = ({ blogId }) => {
  return request(URL.GET_DETAIL.replace(':blogId', blogId))
}

const updateBlog = ({ blogId }, { title, content, description, atIndex }) => {
  return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
}

const deleteBlog = ({ blogId }) => {
  return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
}

const createBlog = ({ title = '', content = '', description = '', atIndex = false } = { title: '', content: '', description: '', atIndex: false }) => {
  return request(URL.CREATE, 'POST', { title, content, description, atIndex })
}

export {
  getBlogs, getIndexBlogs, getBlogsByUserId, getDetail, updateBlog, deleteBlog, createBlog
}
