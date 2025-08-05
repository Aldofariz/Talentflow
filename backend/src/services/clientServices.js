import { prisma } from "../config/database.js";

export const createClients = async (req) => {
        const newClient = await prisma.client_tb.create({
            data: {
                name: req.name,
                email: req.email,
                job: req.job,
                rate: req.rate,
                isActive: req.isActive !== undefined ? req.isActive : true, // Default to true if not provided
            },
        });
        return newClient;
}

export const getClients = async () => {
    const allClient = await prisma.client_tb.findMany({
    });
    return allClient;
}

export const updateClient = async (id, data) => {
    const updatedClient = await prisma.client_tb.update({
        where: { id },
        data
    });
    return updatedClient;
}

export const deleteClient = async (id) => {
    const deletedClient = await prisma.client_tb.delete({
        where: { id },
    });
    return deletedClient;
}

export const searchClients = async (name) => {
    const clients = await prisma.client_tb.findMany({
        where: {
            name: {
                contains: name
            },
        },
    });
    return clients;
}