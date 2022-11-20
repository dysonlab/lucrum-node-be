const express = require("express");
const router = express.Router();

const { login } = require("../controller/auth");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: The Authentication managing API
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login as a user
 *     tags: [Authentication]
 *     requestBody:
 *       description: User login by providing email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: login success
 *         contents:
 *           application/json:
 *             shcema:
 *               message: string
 *       401:
 *         description: Unauthorized access
 *         contents:
 *          application/json:
 *            schema:
 *              message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.post("/auth/login", login);

module.exports = router;
