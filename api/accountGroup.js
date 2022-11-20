const express = require("express");
const router = express.Router();

const { createAccountGroup, 
        deleteAccoutGroup,
        getAccountGroup,
        updateAccountGroup
    } = require("../controller/accountGroup");

/**
 * @swagger
 * components:
 *   schemas:
 *     accountGroup:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: userId
 *         name:
 *           type: string
 *           description: account group name
 *       example:
 *         user: 6346db58e7cfa506c29054cb
 *         name: Debit Card
 */ 

/**
 * @swagger
 * tags:
 *   name: Account Group
 *   description: Account group managing API
 */

/**
 * @swagger
 * /account-group:
 *   post:
 *     summary: Create a user
 *     tags: [Account Group]
 *     requestBody:
 *       description: Payload data to create a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/accountGroup'
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create account group
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.post("/account-group", createAccountGroup);

/**
 * @swagger
 * /account-group/{accountGroupId}:
 *   delete:
 *     summary: Delete an account group
 *     parameters:
 *       - in: path
 *         name: accountGroupId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account Group]
 *     responses:
 *       200:
 *         description: success delete user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
 router.delete("/account-group/:accountGroupId", deleteAccoutGroup);

 /**
 * @swagger
 * /account-group/{userId}:
 *   get:
 *     summary: Get all account group of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account Group]
 *     responses:
 *       200:
 *         description: success get account group
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.get("/account-group/:userId", getAccountGroup);

/**
 * @swagger
 * /account-group/{accountGroupId}:
 *   put:
 *     summary: Update an account group 
 *     parameters:
 *       - in: path
 *         name: accountGroupId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account Group]
 *     requestBody:
 *       description: Payload data to update accont group
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Debit Card
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
 router.put("/account-group/:accountGroupId", updateAccountGroup);

module.exports = router;
