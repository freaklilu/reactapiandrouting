import React,{Component} from  'react';

class Fifth extends Component {
    render(){
      return (
        <div>
            <div className="fifth-highlight-wrapper text-center white row">
  <div className="left-side-wrapper pt-5 mt-2 ml-md-2 mr-md-1 col-md">
<h2></h2>
<p>light.bright.full of might</p>
<ul className="links-wrapper list-unstyled d-flex justify-content-center">
  <li className="pr-2"><a href="#">Learn more</a></li>
  <li className="pl-2"><a href="#">Buy</a></li>
</ul>
  </div>

  <div className="right-side-wrapper pt-5 mt-2 ml-md-1 mr-md-2 col-md">
    <h2></h2>
    <p>New Artist Spotlight workouts<br/>
      with music by Katy Perry.
      </p>
    <ul className="links-wrapper list-unstyled d-flex justify-content-center">
      <li className="pr-2"><a href="#">see what's new</a></li>
      <li className="pl-2 kt"><a href="#">try it free<sup>1</sup></a></li>
    </ul>
  </div>
</div>
        </div>
    );
    }
}

export default Fifth;
