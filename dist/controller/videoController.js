"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideos = exports.updateVideos = exports.getVideo = exports.createVideos = exports.getVideos = void 0;
const Video_1 = __importDefault(require("../model/Video"));
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield Video_1.default.find();
        return res.json(videos);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getVideos = getVideos;
const createVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findOne({ url: req.body.url });
    if (videoFound)
        return res.status(303).json({ message: "the url already exists" });
    const newVideo = new Video_1.default(req.body);
    const savedVideo = yield newVideo.save();
    res.json(savedVideo);
});
exports.createVideos = createVideos;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findById(req.params.id);
    if (!videoFound)
        return res.status(204).json();
    return res.json(videoFound);
});
exports.getVideo = getVideo;
const updateVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoUpdated = yield Video_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!videoUpdated)
        return res.status(204).json();
    return res.json(videoUpdated);
});
exports.updateVideos = updateVideos;
const deleteVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoFound = yield Video_1.default.findByIdAndDelete(req.params.id);
    if (!videoFound)
        return res.status(204).json();
    return res.status(204).json();
});
exports.deleteVideos = deleteVideos;
