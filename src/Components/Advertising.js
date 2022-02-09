import React from "react";
import styled from "styled-components";


function Advertising() {

    return (
<div>
<AdvertisingContainer>
    <AdvertisingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies in ligula sed interdum. Etiam eleifend scelerisque diam, et tristique dolor semper at. Quisque et risus arcu. Donec malesuada, tortor ac porta mollis, purus ex lacinia magna, et ultrices risus eros a urna. Suspendisse ullamcorper elementum erat ut porta. Duis pellentesque aliquam velit, ut rutrum urna mollis quis. Morbi vel dui eu ante suscipit luctus eget sit amet dui. Maecenas vel dignissim justo, sit amet venenatis nisl. Integer rutrum felis vitae lorem aliquet, vel euismod massa consectetur. Cras aliquet urna sed purus faucibus, quis sodales nisl sodales. Sed venenatis cursus purus.
    </AdvertisingText>
    <AdvertisingImage>
          <img src="https://miro.medium.com/max/700/0*du0nNAURAx6t2xW6" />
    </AdvertisingImage>
</AdvertisingContainer>
</div>
    );
}


const AdvertisingContainer = styled.div`
display:flex;
padding:0px;
justify-content: space-between;

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
display:block;
}   
`;

const AdvertisingText = styled.div`
width:50%;
text-align:justify;
margin:auto;
padding:0 0px 0 100px;

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
width:85%;
padding:3.5% 0 0 0;
}
`;

const AdvertisingImage = styled.div`
width:50%;
height:100%;

img {width:65%;
height:100%;
display:block;
margin:auto;
padding:3.5% 0 3.5% 0;}

/*########## Mobile ##########*/    
@media screen and (max-width: 1050px) {
width:100%;

img{width:350px;
height:200px;
display:block;
margin:auto;}
}
`;










export default Advertising