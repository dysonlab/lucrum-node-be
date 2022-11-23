
const express = require("express");
const router = express.Router()

const {
    createExpenseCategory,
    deleteExpenseCategory,
    getExpenseCategory,
    updateExpenseCategory
} = require("../controller/expenseCategory");

/**
* @swagger
* components:
*   schemas:
*     expenseCategory:
*       type: object
*       properties:
*         user:
*           type: string
*           description: userId
*         name:
*           type: string
*           description: account name
*       example:
*         user: 6346db58e7cfa506c29054cb
*         name: Utilities
*/

/**
 * @swagger
 * tags:
 *   name: Expense Category
 *   description: Expense category managing API
 */

/**
 * @swagger
 * /expense-category:
 *   post:
 *     summary: Create an expense category
 *     tags: [Expense Category]
 *     requestBody:
 *       description: Payload data to create an expense category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/expenseCategory'
 *     responses:
 *       200:
 *         description: success create expense category
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create expense category
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
router.post("/expense-category", createExpenseCategory);

/**
 * @swagger
 * /expense-category/{expenseCategoryId}:
 *   delete:
 *     summary: Delete an expense category
 *     parameters:
 *       - in: path
 *         name: expenseCategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Category]
 *     responses:
 *       200:
 *         description: success delete expense category
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
router.delete("/expense-category/:expenseCategoryId", deleteExpenseCategory)

/**
 * @swagger
 * /expense-category/{userId}:
 *   get:
 *     summary: Get all expense category of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Category]
 *     responses:
 *       200:
 *         description: success get expense category
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
router.get("/expense-category/:userId", getExpenseCategory);

/**
 * @swagger
 * /expense-category/{expenseCategoryId}:
 *   put:
 *     summary: Update an expense category
 *     parameters:
 *       - in: path
 *         name: expenseCategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Category]
 *     requestBody:
 *       description: Payload data to update expense category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Utilities
 *     responses:
 *       200:
 *         description: success update expense category
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
 router.put("/expense-category/:expenseCategoryId", updateExpenseCategory);

module.exports = router;
