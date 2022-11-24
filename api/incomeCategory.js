
const express = require("express");
const router = express.Router()

const {
    createIncomeCategory,
    deleteIncomeCategory,
    getIncomeCategory,
    updateIncomeCategory
} = require("../controller/incomeCategory");

/**
* @swagger
* components:
*   schemas:
*     incomeCategory:
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
*         name: Investment
*/

/**
 * @swagger
 * tags:
 *   name: Income Category
 *   description: Income category managing API
 */

/**
 * @swagger
 * /income-category:
 *   post:
 *     summary: Create an income category
 *     tags: [Income Category]
 *     requestBody:
 *       description: Payload data to create an income category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/incomeCategory'
 *     responses:
 *       200:
 *         description: success create income category
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create income category
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
router.post("/income-category", createIncomeCategory);

/**
 * @swagger
 * /income-category/{incomeCategoryId}:
 *   delete:
 *     summary: Delete an income category
 *     parameters:
 *       - in: path
 *         name: incomeCategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Category]
 *     responses:
 *       200:
 *         description: success delete income category
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
router.delete("/income-category/:incomeCategoryId", deleteIncomeCategory)

/**
 * @swagger
 * /income-category/{userId}:
 *   get:
 *     summary: Get all income category of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Category]
 *     responses:
 *       200:
 *         description: success get income category
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
router.get("/income-category/:userId", getIncomeCategory);

/**
 * @swagger
 * /income-category/{incomeCategoryId}:
 *   put:
 *     summary: Update an income category
 *     parameters:
 *       - in: path
 *         name: incomeCategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Category]
 *     requestBody:
 *       description: Payload data to update income category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Salary
 *     responses:
 *       200:
 *         description: success update income category
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
 router.put("/income-category/:incomeCategoryId", updateIncomeCategory);

module.exports = router;
