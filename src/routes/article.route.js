const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
const ArticleController = require('../controllers/article.controller');
const articleController = new ArticleController();

// Article 전체 조회 (추가예정)
router.get('/', articleController.findAllArticle);
// Article 작성
router.post('/', authMiddleware, articleController.createArticle);
// Article item 검색
router.post('/item', articleController.findArticleItem);

// Article 하나 보기
router.get('/:articleId', articleController.findArticle);

// Article 수정
router.put('/:articleId', authMiddleware, articleController.updateArticle);
// Article 삭제
router.delete('/:articleId', authMiddleware, articleController.deleteArticle);

module.exports = router;
