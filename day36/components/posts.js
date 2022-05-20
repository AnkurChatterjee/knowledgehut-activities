import {Component} from 'react';

export class Comment extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let comment  = this.props.arg;
        return (
            <div>
                <p><b>Comment: </b>{comment.text}</p>
                <Profile arg = {comment.profile}/>
                <p>Likes: {comment.likes}</p>
            </div>
        )
    }

}
export class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let author = this.props.arg;
        return (
            <div>
                <p>Name: {author.name}</p>
                <img src={author.image} width='100' />
            </div>
        )
    }
}