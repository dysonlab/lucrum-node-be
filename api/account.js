const express = require("express");
const router = express.Router();

const {createAccount} = require("../controller/account");

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
 *           type: integer
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
 *    post:
 *     summary: Create an account
 *     tags: [Account]
 *     requesBody:
 *       description: Payload data to create an account
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/accountGroup'
 *    responses:
 *      200:
 *        description: success create account
 *        contents:
 *           application/json:
 *             schema:
 *               message: string
 *      409:
 *        description: conflict create account group
 *        contents:
 *           application/json:
 *             schema:
 *               message: string
 *      500:
 *        description: internal server error
 *        contents:
 *           application/json:
 *             schema: 
 *               message: string
 */
router.post("/account", createAccount);

module.exports = router;
