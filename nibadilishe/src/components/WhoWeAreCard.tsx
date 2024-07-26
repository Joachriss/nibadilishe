import dummy from '../assets/images/dummy.jpg'


export const WhoWeAreCard = () => {
    return (
      <div className="col-span-2 md:col-span-1 shadow-lg bg-white px-0 rounded-lg border-b-2 border-b-[#F05A28]">
          <div className="mx-auto flex flex-col">
              <img src={dummy} className="mx-auto rounded-lg aspect-[]" alt="Event picture" />
              <div className="text-2xl md:text-3xl text-center my-3 font-['quicksand-bold']">We are</div>
              <div className="text-md text-center mb-5 px-6">
                  Lorem ipsum dolor sit amet, consectetur acupiditate inventore harum nemo distinctio, vero eveniet. Lorem ipsum dolor, sit amet consectetur minus ad repellendus aperiam architecto, enim harum consectetur!
              </div>
          </div>  
      </div>
    )
  }
  