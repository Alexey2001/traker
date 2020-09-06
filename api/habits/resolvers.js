import habits from "./habits";

export const habitsResolvers = {
    Query: {
        async habits() {
            console.log('habits');
            return [{
                _id: "somearray",
                name: 'Make my bed'
            }]
        }
    }
}