import { useContext, createContext} from 'react';

export const CommentContext = createContext({
        comments : {},
        updateComments : ()=>{}
    }
)

export default function useCommentContext(){
    useContext(CommentContext);
}

export const CommentProvider = CommentContext.Provider;