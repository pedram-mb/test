import {Link} from "react-router-dom";

const Home = ()=>{
    return(
        <div className="container mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit ipsam dolor tenetur aliquam assumenda, laboriosam tempore illum quidem consectetur eos, iusto maiores temporibus dolorum, numquam quos nam inventore. In aliquid alias reprehenderit ratione nostrum non similique repudiandae, et mollitia neque excepturi assumenda tempora repellendus ex laudantium cumque quisquam, ad nisi? Perferendis consectetur dolore minus hic fugiat dicta, iusto officia exercitationem maxime atque natus eum at, voluptate ratione, obcaecati quos omnis distinctio aliquam provident iure a? Officia exercitationem nam vero qui incidunt, ratione dolorem vel delectus totam minima cumque accusantium at eveniet ad praesentium nulla reprehenderit reiciendis sit possimus quis.
            </p>
            <Link to="/posts" className="btn btn-warning mt-2">posts</Link>
            <Link to="/users" className="btn btn-danger ms-3 mt-2">users</Link>
        </div>
    )
}
export default Home;