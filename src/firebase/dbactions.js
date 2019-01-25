import { db } from './config'

export const publishPost = (post) => {
    const timestamp = (new Date()).getTime();
    const random = (Math.random() + 1).toString(36).substring(7);
    db.ref(`/${endPoints.POSTS}/${timestamp}-${random}`)
        .set({
            ...post,
            // uid: auth.currentUser.uid,
            createdAt: timestamp * -1,
            pid:`${timestamp}-${random}`
        });
}
