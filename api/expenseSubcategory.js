
const express = require("express");
const router = express.Router()

const {
    createExpenseSubcategory,
    deleteExpenseSubcategory,
    getExpenseSubcategory,
    updateExpenseSubcategory,
} = require("../controller/expenseSubcategory");

/**
* @swagger
* components:
*   schemas:
*     expenseSubcategory:
*       type: object
*       properties:
*         user:
*           type: string
*           description: userId
*         expenseCategory:
*           type: string
*           description: userId
*         name:
*           type: string
*           description: account name
*       example:
*         user: 6346db58e7cfa506c29054cb
*         expenseCategory: 637ad206054b18c94639ccb0
*         name: Gas
*/

/**
 * @swagger
 * tags:
 *   name: Expense Subcategory
 *   description: Expense subcategory managing API
 */

/**
 * @swagger
 * /expense-subcategory:
 *   post:
 *     summary: Create an expense subcategory
 *     tags: [Expense Subcategory]
 *     requestBody:
 *       description: Payload data to create an expense subcategory
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/expenseSubcategory'
 *     responses:
 *       200:
 *         description: success create expense subcategory
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create expense subcategory
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
router.post("/expense-subcategory", createExpenseSubcategory);

/**
 * @swagger
 * /expense-subcategory/{expenseSubcategoryId}:
 *   delete:
 *     summary: Delete an expense category
 *     parameters:
 *       - in: path
 *         name: expenseSubcategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Subcategory]
 *     responses:
 *       200:
 *         description: success delete expense subcategory
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
router.delete("/expense-subcategory/:expenseSubcategoryId", deleteExpenseSubcategory)

/**
 * @swagger
 * /expense-subcategory/{userId}:
 *   get:
 *     summary: Get all expense subcategory of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Subcategory]
 *     responses:
 *       200:
 *         description: success get expense subcategory
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
router.get("/expense-subcategory/:userId", getExpenseSubcategory);

/**
 * @swagger
 * /expense-subcategory/{expenseSubcategoryId}:
 *   put:
 *     summary: Update an expense category
 *     parameters:
 *       - in: path
 *         name: expenseSubcategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Expense Subcategory]
 *     requestBody:
 *       description: Payload data to update expense subcategory
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               expenseCategory:
 *                 type: string
 *               name:
 *                 type: string
 *             example:
 *               expenseCategory: 637ad206054b18c94639ccb0
 *               name: Gas
 *     responses:
 *       200:
 *         description: success update expense subcategory
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
router.put("/expense-subcategory/:expenseSubcategoryId", updateExpenseSubcategory)

module.exports = router;
