"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [{
    name: 'title',
    title: 'Title',
    type: 'string'
  }, {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96
    }
  }, {
    name: 'author',
    title: 'Author',
    type: 'reference',
    to: {
      type: 'author'
    }
  }, {
    name: 'mainImage',
    title: 'Main image',
    type: 'image',
    options: {
      hotspot: true
    }
  }, // {
  //   name: 'categories',
  //   title: 'Categories',
  //   type: 'array',
  //   of: [{type: 'reference', to: {type: 'category'}}],
  // },
  {
    name: 'publishedAt',
    title: 'Published at',
    type: 'datetime'
  }, {
    name: 'body',
    title: 'Body',
    type: 'blockContent'
  }],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare: function prepare(selection) {
      var author = selection.author;
      return Object.assign({}, selection, {
        subtitle: author && "by ".concat(author)
      });
    }
  }
};
exports["default"] = _default;