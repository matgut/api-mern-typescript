
import { RequestHandler } from 'express';
import Video from '../model/Video';

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error);
    }
}

export const createVideos: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound) return res.status(303).json({ message: "the url already exists" });
    
    const newVideo = new Video(req.body); 
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
}

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);

    if (!videoFound) return res.status(204).json();

    return res.json(videoFound);
}

export const updateVideos: RequestHandler = async (req, res) => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
    
}

export const deleteVideos: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    if (!videoFound) return res.status(204).json();

    return res.status(204).json();
    
}