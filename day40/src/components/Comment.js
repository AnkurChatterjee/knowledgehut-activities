import {Component} from'react';

function Comment(props){
    return( 
        <div>
            <b>Comment: </b> {props.arg.text}
            <Profile arg={props.arg.profile}/>
            <b>Likes: </b>{props.arg.likes}
            <br/><br/>
        </div>
    )
}
export class Profile extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let profile = this.props.arg;
        return(
            <div>
                <p><b>Name: </b>{profile.name}</p>
                <img src={profile.imageURL} width='100' />
            </div>
        )
    }
}


export default Comment;