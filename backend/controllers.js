import { Card } from "./model.js";
import { ApiError } from "./utils/ApiError.js";
import { ApiResponse } from "./utils/ApiResponce.js";
import { asyncHandler } from "./utils/AsyncHandler.js";


const createCard = asyncHandler(async (req, res) => {

    const { title, description } = req.body

    if ([title, description].some(field => !field || field.trim() === "")) {
        throw new ApiError(400, "Both fields are required");
    }

    const existingCard = await Card.findOne({ title });
    if (existingCard) {
        throw new ApiError(500, "This Title Already Exists")
    }

    const newCard = await Card.create({
        title, description
    })

    if (!newCard) {
        throw new Error(500, "Something went wrong during Card creation");
    }
    return res.status(201).json(new ApiResponse(200, { newCard }, "New Card Added Successfully"))

})

const GetAllCard = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10,title } = req.query;

    let SearchQuery = {};
    if (title && title.trim() !== "") {
        SearchQuery.title = { $regex: title, $options: "i" }; // case-insensitive search
    }
    const result = await Card.find(SearchQuery)
        // .select('-_id')
        .skip((page - 1) * limit)
        .limit(limit).sort()
        .exec();

    return res.status(200).json(new ApiResponse(201, { result }, "Search Data Fetched Successfully"))
})

const GetCardDetails = asyncHandler(async (req, res) => {
    const { titleId } = req.params

    if (!titleId) {
        throw new ApiError(500, "input the titleId")
    }

    const CardDetails = await Card.findById(titleId)

    if (!CardDetails) {
        throw new ApiError(500, "There is no Card With this Title")
    }
    
    return res.status(200).json(new ApiResponse(201, { CardDetails }, "Card Details Fetched Successfully"))
})


export { createCard, GetAllCard, GetCardDetails }