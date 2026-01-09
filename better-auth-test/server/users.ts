"use server";

import { auth } from "../lib/auth";

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: "pxpie@test.com",
            password: "pass123"
        },
        })
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "pxpie@test.com",
            password: "pass123",
            name: "pxpie"
        }
    })
}