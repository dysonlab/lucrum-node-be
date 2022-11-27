const express = require("express");
const router = express.Router();

const {createTransaction, getTransaction, updateTransaction, deleteTransaction} = require("../controller/transaction");

/**
* @swagger
* components:
*   schemas:
*     transaction:
*       type: object
*       properties:
*         user:
*           type: string
*           description: userId
*         account:
*           type: string
*           description: account name
*         date:
*           type: number
*           description: transaction date
*         expenseAmount:
*           type: number
*           description: expense amount
*         expenseCategoty:
*           type: string
*           description: expense category
*         expenseSubcategory:
*           type: string
*           description: expense subCategory
*         incomeAmount:
*           type: number
*           description: income amount
*         incomeCategoty:
*           type: string
*           description: income category
*         incomeSubcategory:
*           type: string
*           description: income subCategory
*         transferTo:
*           type: string
*           description: trasfer to account
*         transferAmount:
*           type: number
*           description: transfer amount
*         transferFees:
*           type: number
*           description: transfer fees
*         note:
*           type: string
*           description: transaction note
*         image:
*           type: string
*           description: image URL
*       example:
*         user: 637a358eed9bbe4015b8e93d
*         account: 637a358eed9bbe4015b8e93d
*         date: 1667193745958
*         expenseAmount: 250000
*         expenseCategory: 6382fe3e14e5923cb9a93f77
*         expenseSubcategory: 6382fe3e14e5923cb9a93f7c
*         incomeAmount: 0
*         incomeCategory:
*         incomeSubcategory:
*         transferTo: 
*         transferAmount: 
*         transferFees: 
*         note: transaction note
*         image: 
*/

/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: Income category managing API
 */

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create a transaction record
 *     tags: [Transaction]
 *     requestBody:
 *       description: Payload data to create a transaction record
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/transaction'
 *     responses:
 *       200:
 *         description: success create transaction record
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
router.post("/transaction", createTransaction);

/**
 * @swagger
 * /transaction/{transactionId}:
 *   delete:
 *     summary: Delete a transaction record
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Transaction]
 *     responses:
 *       200:
 *         description: success delete transaction record
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
router.delete("/transaction/:transactionId", deleteTransaction);

/**
 * @swagger
 * /transaction/{userId}:
 *   get:
 *     summary: Get all transaction record of a user
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Transaction]
 *     responses:
 *       200:
 *         description: success get transaction record
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
router.get("/transaction/:userId", getTransaction);

/**
 * @swagger
 * /transaction/{transactionId}:
 *   put:
 *     summary: Update transaction record
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Transaction]
 *     requestBody:
 *       description: Payload data to update transaction record
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               account:
 *                 type: string
 *               date:
 *                 type: number
 *               expenseAmount:
 *                 type: number
 *               expenseCategory:
 *                 type: string
 *               expenseSubcategory:
 *                 type: string
 *               incomeAmount:
 *                 type: string
 *               incomeCategory:
 *                 type: string
 *               incomeSubcategory:
 *                 type: string
 *               transferTo:
 *                 type: string
 *               transferAmount:
 *                 type: amount
 *               transferFees:
 *                 type: number
 *               note:
 *                 type: string
 *               image:
 *                 type: sting
 *             example:
 *               account: 637a358eed9bbe4015b8e93d
 *               date: 1667193745958
 *               expenseAmount: 250000
 *               expenseCategory: 6382fe3e14e5923cb9a93f77
 *               expenseSubcategory: 6382fe3e14e5923cb9a93f7c
 *               incomeAmount: 0
 *               incomeCategory: 
 *               incomeSubcategory:
 *               transferTo: 
 *               transferAmount: 
 *               transferFees: 
 *               note: transaction note
 *               image: 
 *     responses:
 *       200:
 *         description: success update transaction record
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
router.put("/transaction/:transactionId", updateTransaction);

module.exports = router;