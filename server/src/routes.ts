import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
   const { type, comment, screenshot } = req.body;

   const prismaFeedbacksRepository = new PrismaFeedbackRepository();
   const nodeailerMailAdapter = new NodemailerMailAdapter();

   const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodeailerMailAdapter);

   await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
   });

   return res.status(201).send();
});