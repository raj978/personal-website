"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailValidator from "email-deep-validator";
import ContactFormEmail from "@/email/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyEmail(senderEmail: string) {
    // Create an instance of EmailValidator
    const emailValidator = new EmailValidator();

    const {wellFormed, validDomain} = await emailValidator.verify(senderEmail);

    if (wellFormed && validDomain) {
        return true;
    } else {
        return false;
    }
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    // validate email using email-deep-validator
    const valid = await verifyEmail(senderEmail);
    if (!valid) {
        return {
            error: "Invalid sender email",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "guptarajat978@gmail.com",
            subject: "Message from Rajat's contact form 🚀🚀🚀",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
