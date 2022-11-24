
const express = require("express");
const router = express.Router()

const {
    createIncomeSubcategory,
    deleteIncomeSubcategory,
    getIncomeSubcategory,
    updateIncomeSubcategory,
} = require("../controller/incomeSubcategory");

/**
* @swagger
* components:
*   schemas:
*     incomeSubcategory:
*       type: object
*       properties:
*         user:
*           type: string
*           description: userId
*         incomeCategory:
*           type: string
*           description: userId
*         name:
*           type: string
*           description: account name
*       example:
*         user: 6346db58e7cfa506c29054cb
*         incomeCategory: 637ad206054b18c94639ccb0
*         name: Sucor
*/

/**
 * @swagger
 * tags:
 *   name: Income Subcategory
 *   description: Income subcategory managing API
 */

/**
 * @swagger
 * /income-subcategory:
 *   post:
 *     summary: Create an income subcategory
 *     tags: [Income Subcategory]
 *     requestBody:
 *       description: Payload data to create an income subcategory
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/incomeSubcategory'
 *     responses:
 *       200:
 *         description: success create income subcategory
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create income subcategory
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
router.post("/income-subcategory", createIncomeSubcategory);

/**
 * @swagger
 * /income-subcategory/{incomeSubcategoryId}:
 *   delete:
 *     summary: Delete an income category
 *     parameters:
 *       - in: path
 *         name: incomeSubcategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Subcategory]
 *     responses:
 *       200:
 *         description: success delete income subcategory
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
router.delete("/income-subcategory/:incomeSubcategoryId", deleteIncomeSubcategory)

/**
 * @swagger
 * /income-subcategory/{userId}:
 *   get:
 *     summary: Get all income subcategory of a user 
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Subcategory]
 *     responses:
 *       200:
 *         description: success get income subcategory
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
router.get("/income-subcategory/:userId", getIncomeSubcategory);

/**
 * @swagger
 * /income-subcategory/{incomeSubcategoryId}:
 *   put:
 *     summary: Update an income category
 *     parameters:
 *       - in: path
 *         name: incomeSubcategoryId
 *         schema:
 *           type: string
 *           required: true
 *     tags: [Income Subcategory]
 *     requestBody:
 *       description: Payload data to update income subcategory
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               incomeCategory:
 *                 type: string
 *               name:
 *                 type: string
 *             example:
 *               incomeCategory: 637ad206054b18c94639ccb0
 *               name: Salary
 *     responses:
 *       200:
 *         description: success update income subcategory
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
router.put("/income-subcategory/:incomeSubcategoryId", updateIncomeSubcategory)

module.exports = router;
