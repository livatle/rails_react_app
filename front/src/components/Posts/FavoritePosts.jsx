import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//api
import { getFavoritePosts } from "../../lib/api/user";
//material-ui
import { Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";

const Favoriteposts = () => {
    const [favoritePosts, setFavoritePosts] = useState([])
    const query = useParams();

    //いいねした投稿の一覧を取得する関数
    const handleGetFavoritePosts = async () => {
        try {
            const res = await getFavoritePosts(query.id);
            //いいねした投稿の情報をセット
            setFavoritePosts(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        handleGetFavoritePosts();
    }, []);

    if (favoritePosts.length >= 1) {
        return(
            <>
                <h2 className="c-text">FAVORITE POSTS</h2>
                <Divider color="#ffffff" />
                <Table className="c-box">
                    <TableBody>
                        {favoritePosts.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 }}}
                            >   
                                <TableCell align="center">
                                    <Link to={`/post/${item.id}`}>
                                        <p className="c-text__item">{item.content}</p>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }  else {
        return (
            <h2 className="c-text">NO FAVORITE POST</h2>
        );
    }
}
export default Favoriteposts
