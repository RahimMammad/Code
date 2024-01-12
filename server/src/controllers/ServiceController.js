import ServiceModel from "../models/ServiceModel.js"

export const getServices = async (req, res) => {
    try {
        const services = await ServiceModel.find({})
        res.send(services)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getService = async (req, res) => {
    try {
        const service = await ServiceModel.findById(req.params.id)
        res.send(service)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const createService = async (req, res) => {
    try {
        const service = new ServiceModel({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
        })
        await service.save()
        res.send(service)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateService = async (req, res) => {
    try {
        const services =  ServiceModel.findByIdAndUpdate(req.params.id)
        if(services) {
            services.name = req.body.name,
            services.description = req.body.description,
            services.image = req.body.image
        }
        await services.save()
        res.send(services)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteService = async (req, res) => {
    try {
        const services = ServiceModel.findByIdAndDelete(req.params.id)
        res.send(services)
    } catch (error) {
        res.status(500).send(error)
    }
}