const express = require("express");
const router = express.Router();

const {
    createAccount,
    deleteAccount,
    getAccount,
    updateAccount
} = require("../controller/account");

/**
 * @swagger
 * components:
 *   schemas:
 *     account:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *           description: userId
 *         accountGroup:
 *           type: string
 *           description: accountGroupId
 *         name:
 *           type: string
 *           description: account name
 *         amount:
 *           type: number
 *           description: amount of money in an account
 *         description:
 *           type: string
 *           description: account description
 *       example:
 *         user: 6346db58e7cfa506c29054cb
 *         accountGroup: 6357d54aede8984311ef1018
 *         name: BCA
 *         description: This is Bank Central Asia debit card account
 */

/**
 * @swagger
 * tags:
 *   name: Account
 *   description: Account managing API
 */

/**
 * @swagger
 * /account:
 *   post:
 *     summary: Create an account
 *     tags: [Account]
 *     requestBody:
 *       description: Payload data to create an account
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/account'
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
router.post("/account", createAccount);

/**
 * @swagger
 * /account/{accountId}:
 *   delete:
 *     summary: Delete an account
 *     parameters:
 *       - in: path
 *         name: accountId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account]
 *     responses:
 *       200:
 *         description: success delete account
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
router.delete("/account/:accountId", deleteAccount)

/**
 * @swagger
 * /account/{userId}:
 *   get:
 *     summary: Get all account of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account]
 *     responses:
 *       200:
 *         description: success get account
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
router.get("/account/:userId", getAccount);

/**
 * @swagger
 * /account/{accountId}:
 *   put:
 *     summary: Update an account
 *     parameters:
 *       - in: path
 *         name: accountId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Account]
 *     requestBody:
 *       description: Payload data to update account group
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accountGroup:
 *                 type: string
 *               name:
 *                 type: string
 *               amount:
 *                 type: number
 *               description:
 *                 type: string 
 *             example:
 *                 accountGroup: 637ad206054b18c94639cca3
 *                 name: BCA
 *                 amount: 42000000
 *                 description: This is Bank Central Asia account
 *                
 *     responses:
 *       200:
 *         description: success update account
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
router.put("/account/:accountId", updateAccount);

module.exports = router;
