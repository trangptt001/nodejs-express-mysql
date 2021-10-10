const ErrorResponse = require('../utils/error.class.js');
const SuccessResponse = require('../utils/success.class.js')

exports.deleteOne = Model => async(req, res, next) => {
    try{
        const record = await Model.findByPk(req.params.id);
        if(!record){
            return res.status(400).send(
                new ErrorResponse("MSG01",400, `Can not find any record has id ${req.params.id}` )
            )
        }
        const result = await Model.destroy({where :{id: req.params.id}});
        if(result === 1){
            return res.status(200).send(
                new SuccessResponse(200, record, `Delete success!`)
            )
        }
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}

exports.findByPk = Model => async(req, res, next) => {
    try{
        const result =  await Model.findByPk(req.params.id);;
        if(!result){
            return res.status(400).send(
                new ErrorResponse("MSG01",400, `Can not find any record has id ${req.params.id}` )
            )
        }
        return res.status(200).send(
            new SuccessResponse(200, result, `Found information of with id ${req.params.id}!`)
        )
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}

exports.update = Model => async(req, res, next) => {
    try{
        const id = req.params.id;
        let model = req.body;
        model = {...model, updatedAt: Date.now()}
        const result = await Model.update(model, {where: {id}});
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}

exports.create = Model => async(req, res, next) => {
    try{
        const model = {
            ...req.body,
            createAt: Date.now()
        };
        const result = await Model.create(model);
        if(result){
            return res.status(200).send(
                new SuccessResponse(200, result, "create success")
            )
        }
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}

exports.getAllPaging = (Model, order) => async(req, res, next) => {
    try{
        let { pageSize, pageIndex } = req.query;
        const result = await Model.findAndCountAll({
            limit: + pageSize,
            offset: + (pageIndex * (pageIndex)),
            order: order
        })
        const data = {
            items: result.rows,
            totalRecord: result.count,
            pageSize: Number.parseInt(pageSize),
            pageIndex: Number.parseInt(pageIndex),
            totalPage: Math.round(result.count/pageSize)
        }
        res.status(200).send(
            new SuccessResponse(200, data, '')
        );
    }catch(error){
        return res.status(500).send(
            new ErrorResponse("MSG00",500, error.message)
        )
    }
}